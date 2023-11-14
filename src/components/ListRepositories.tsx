import React, { useEffect, useState } from "react";
import axios from "axios";
import RepositoryListInfo from "@common/RepositoryListInfo";
import endpoints from "@services/api";
import { useAuth } from "@hooks/useAuth";

export default function ListRepositories() {
  const user = useAuth()?.user;
  const repositories = user?.repositories;
  return (
    <>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {repositories?.map((repo, index) => (
          <RepositoryListInfo
            key={index}
            name={repo.name}
            description={repo.description}
            url={repo.url}
            creator={user?.username}
            starred={repo.starred}
          />
        ))}
      </div>
    </>
  );
}
