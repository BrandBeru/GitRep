import { useRouter } from "next/router";
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  FC,
  ReactNode,
} from "react";
import axios from "axios";
import endpoints from "@services/api";
import { useCookies } from "react-cookie";

interface ProviderAuth {
  children: ReactNode;
}

const AuthContext: React.Context<{
  user: {};
  friends: [];
  token: string;
  signIn: () => {};
  logout: () => {};
} | null> = createContext<{
  user: {};
  friends: [];
  token: string;
  signIn: () => {};
  logout: () => {};
} | null>(null);

export const ProviderAuth: FC<ProviderAuth> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const auth: any = useProviderAuth();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient &&(
    <>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProviderAuth() {
  const [user, setUser] = useState()
  const [friends, setFriends] = useState<[string]>();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const router = useRouter();
  const token: string = cookies.token;

  async function getAll(){
    axios.defaults.headers.Authorization = `Bearer ${cookies.token}`;
    async function getUser(){
        setUser((await axios.get(endpoints.auth.profile)).data)
    }
    async function getFriends() {
        const userArray: [string] = ['']
        await user?.following.forEach(async (follow: {}) => {
          const user = await (
            await axios.get(
              endpoints.users.getUserByName(follow.followingUsername)
            )
          ).data;
          userArray.push(user)
        });
        userArray.splice(0, 1);
        setFriends(userArray)
      }
      await getUser()
      await getFriends()
  }

  useEffect(() => {
    getAll()
  }, [])

  const signIn = async (username: string, password: string) => {
    const options: any = {
      Headers: {
        accept: "*/*",
        "": "",
        "Content-Type": "application/json",
      },
    };
    const authorization = (
      await axios.post(endpoints.auth.login, { username, password }, options)
    ).data;
    if (authorization) {
      const expiration: Date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      setCookie("token", authorization, { expires: expiration });

      axios.defaults.headers.Authorization = `Bearer ${authorization}`;

      console.log(axios.defaults.headers.Authorization)

      router.push("/home");
    }
  };
  const logout = () => {
    removeCookie("token");
    setUser(null);
    delete axios.defaults.headers.Authorization;

    router.push("/login");
  };

  return {
    user,
    friends,
    token,
    signIn,
    logout,
  };
}
