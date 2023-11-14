import React, { Fragment } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import { Checkbox, Option, Select } from "@material-tailwind/react";

import { FaGitAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import ListButton from "./ListButton";
import ButtonMenu from "./ButtonMenu";
import { ParsedUrlQuery } from "querystring";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({name}:{name:string}) {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {name}
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              public
            </span>
          </h2>
          <div className="mt-1 flex  gap-3 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500 gap-1">
              <FaGitAlt
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="font-semibold">0</span> branches
            </div>
            <div className="mt-2 flex items-center text-sm gap-1 text-gray-500">
              <TagIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="font-semibold">0</span> tags
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Created on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <div className="flex w-full gap-5 items-center p-3">
            <div className="flex-1">
            <Select size="md" label="Select branch">
              <Option>Main</Option>
              <Option>Master</Option>
            </Select>
            </div>
            <ButtonMenu
              title="Download"
              objects={["Download as .zip", "Git clone"]}
            />
          </div>

          {/* Dropdown */}
          {/* <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon
                className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu> */}
        </div>
      </div>
    </>
  );
}
