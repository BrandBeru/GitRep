const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
    auth: {
        login: `${API}/${VERSION}/auth/login`,
        profile: `${API}/${VERSION}/auth/profile`,
    },
    repositories:{
        getAllRepositories: `${API}/${VERSION}/repositories`,
        getRepository: (name: string) => `${API}/${VERSION}/repositories/${name}`,
        updateRepository: (id: number) => `${API}/${VERSION}/repositories/${id}`,
        deleteRepository: (id: number) => `${API}/${VERSION}/repositories/${id}`,
        createRepository: `${API}/${VERSION}/repositories`,
    },
    users:{
        getUserByName: (username:string) => `${API}/${VERSION}/users/${username}`,
    },
    files: `${API}/${VERSION}/files`,
    star: {
        setStarred: `${API}/${VERSION}/star`,
    },
    follow: {
        setFollow: `${API}/${VERSION}/follow`
    }
}

export default endpoints;