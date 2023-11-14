import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ProfileInfo from "@components/ProfileInfo";
import { BookOpenIcon, InboxStackIcon, SignalIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";
import ListRepositories from "@components/ListRepositories";
import ListStarredRepository from "@components/ListStarredRepositories";
import ListFriends from "@components/ListFriends";

export default function Profile() {
  return (
    <>
      <Tabs value="html">
        <TabsHeader className="bg-gray-300 overflow-scroll lg:overflow-hidden">
          <Tab value={"info"}>
            <div className="flex items-center gap-2">
              {React.createElement(BookOpenIcon, { className: "w-5 h-5" })}
              Overview
            </div>
          </Tab>
          <Tab value={"repositories"}>
            <div className="flex items-center gap-2">
              {React.createElement(InboxStackIcon, { className: "w-5 h-5" })}
              Repositories
            </div>
          </Tab>
          <Tab value={"stars"}>
            <div className="flex items-center gap-2">
              {React.createElement(StarIcon, { className: "w-5 h-5" })}
              Stars
            </div>
          </Tab>
          <Tab value={"friends"}>
            <div className="flex items-center gap-2">
              {React.createElement(SignalIcon, { className: "w-5 h-5" })}
              Following
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="info">
            <ProfileInfo />
          </TabPanel>
          <TabPanel value="repositories">
            <ListRepositories />
          </TabPanel>
          <TabPanel value="stars">
            <ListStarredRepository />
          </TabPanel>
          <TabPanel value="friends">
            <ListFriends />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
}
