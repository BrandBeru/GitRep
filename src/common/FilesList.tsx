import { DocumentIcon, StarIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import BreadcrumbsPath from "./Breadcrumbs";
import { Chip } from "@material-tailwind/react";
import ButtonMenu from "./ButtonMenu";

const TABLE_ROWS = [
  {
    name: "Folder 1",
    file: false,
    description: "Manager",
    date: "23/04/18",
  },
  {
    name: "File 1",
    file: true,
    description: "Manager",
    date: "23/04/18",
  },
  {
    name: "File 2",
    file: true,
    description: "Manager",
    date: "23/04/18",
  },
  {
    name: "Folder 2",
    file: false,
    description: "Manager",
    date: "23/04/18",
  },
];

export default function FilesList() {
  const [open, setOpen] = React.useState(0);
  const [parentOpen, setParentOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  const handleParentOpen = (value: any) =>
    setParentOpen(parentOpen === value ? 0 : value);
  return (
    <>
      <Card className="h-full w-full border rounded-lg overflow-scroll lg:overflow-hidden p-3">
        <table className="min-w-full table-auto overflow-scroll lg:overflow-hidden">
          <thead>
            <tr>
              <th className="flex items-center justify-between">
                <BreadcrumbsPath />
              </th>
              <th></th>
              <th>
                <span className="flex items-center cursor-pointer font-normal text-sm ">
                  {React.createElement(StarIcon, { className: "w-5 h-5" })} Star
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <Accordion open={parentOpen === 1}>
              <AccordionHeader onClick={() => handleParentOpen(1)}>
                Name Project here also
              </AccordionHeader>
              <AccordionBody>
                {TABLE_ROWS.map(({ name, file, description, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        {file ? (
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <span className="flex gap-3">
                              {React.createElement(DocumentIcon, {
                                className: "w-5 h-5",
                              })}
                              {name}
                            </span>
                          </Typography>
                        ) : (
                          <Accordion open={open === index + 1}>
                            <AccordionHeader
                              onClick={() => handleOpen(index + 1)}
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                <span className="flex gap-3">
                                  {React.createElement(FolderIcon, {
                                    className: "w-5 h-5",
                                  })}
                                  {name}
                                </span>
                              </Typography>
                            </AccordionHeader>
                            <AccordionBody>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ipsam voluptates voluptate, nesciunt facere
                              ab possimus. Commodi, perferendis aut praesentium
                              minima, beatae in ex maiores iste at ea corporis,
                              suscipit qui!
                            </AccordionBody>
                          </Accordion>
                        )}
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </AccordionBody>
            </Accordion>
          </tbody>
        </table>
      </Card>
    </>
  );
}
