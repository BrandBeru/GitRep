import { InboxIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@hooks/useAuth";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import axios from "axios";
import endpoints from "@services/api";

const USERS = [
  {
    name: "Juan Bernal",
    username: "juan10",
    organization: "BrandBeru",
    email: "juan@mail.com",
    picture_url: "https://avatars.githubusercontent.com/u/118768050?v=4",
    repositories: 3,
  },
  {
    name: "Brennedy Muñoz",
    username: "bren304",
    organization: "BrandBeru",
    email: "bren@mail.com",
    picture_url: "https://avatars.githubusercontent.com/u/118768050?v=4",
    repositories: 8,
  },
  {
    name: "Giovanny Bernal",
    username: "giobero1402",
    organization: "BrandBeru",
    email: "beru@mail.com",
    picture_url: "https://avatars.githubusercontent.com/u/118768050?v=4",
    repositories: 3,
  },
  {
    name: "Giovanny Bernal",
    username: "giobero1402",
    organization: "BrandBeru",
    email: "beru@mail.com",
    picture_url: "https://avatars.githubusercontent.com/u/118768050?v=4",
    repositories: 6,
  },
  {
    name: "Giovanny Bernal",
    username: "giobero1402",
    organization: "BrandBeru",
    email: "beru@mail.com",
    picture_url: "https://avatars.githubusercontent.com/u/118768050?v=4",
    repositories: 5,
  },
];

export default function ListFriends() {
  const following = useAuth()?.friends;
  
  return (
    <>
      <div className="mx-auto mt-10 grid min-w-full grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0">
        <Card>
          <List className="grid grid-cols-1 lg:grid-cols-3 min-w-full gap-5">
            {following?.map((friend, index) => {
              return (
                <ListItem key={index} className="flex gap-3 justify-between">
                  <div className="flex gap-3">
                    <ListItemPrefix>
                      <Avatar variant="circular" alt={""} src={""} />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        {""}{" "}
                        <span className="font-thin"><span className="text-sm font-thin mr-1">@</span>{friend.username}</span>
                      </Typography>
                      <div className="flex gap-3 items-center ">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          {friend.email}
                        </Typography>
                        -
                        <div className="flex items-center gap-1">
                          {React.createElement(InboxIcon, {
                            className:
                              "w-4 h-4 hover:text-gray-400 duration-300",
                          })}
                          {friend.repositories.length}repositories
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {React.createElement(PlusCircleIcon, {
                      className: "w-7 h-7 hover:text-gray-400 duration-300",
                    })}
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </div>
    </>
  );
}
