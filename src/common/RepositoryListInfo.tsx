import { InboxIcon, StarIcon } from "@heroicons/react/24/outline";
import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function RepositoryListInfo({name, description,url, starred, creator}:{name:string, description:string, url:string, starred:[{id:number, repositoryId:number, creator:string}]}) {
  return (
    <>
      <Card className="w-96">
        <CardBody>
          <div className="flex justify-between gap-3">
            {React.createElement(InboxIcon, { className: "w-10 h-10" })}
            <Button size="sm" variant="text" className="font-semibold lowercase">
                <span className="font-light text-xs">@ {" "}</span>{creator}
            </Button>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
            <span className="border rounded-lg p-1 text-xs">public</span>
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 items-center flex ">
          <a href="#" className="inline-block ">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2 text-sm"
            >
              {starred?.length}
              {React.createElement(StarIcon, { className: "w-5 h-5" })}
            </Button>
          </a>
          <span className="inline-block text-sm">Updated 0 minutes ago</span>
        </CardFooter>
      </Card>
    </>
  );
}
