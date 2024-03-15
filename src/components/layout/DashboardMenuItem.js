import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import RightIcon from "../icons/RightIcon";
import UpIcon from "../icons/UpIcon";
import DownIcon from "../icons/DownIcon";
import BookopenIcon from "../icons/BookopenIcon";


const DashboardMenuItem = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-gray-900 border border-gray-300 rounded text-md bg-gradient-to-t from-fuchsia-100 to-blue-100 space-y-6 p-11">
        <div className="flex gap-3 justify-center items-center text-purple-900 mb-9">
            <BookopenIcon className="w-7 h-7"/>
           <h2 className="text-2xl ">Dashboard</h2>
        </div>
        
      <Link
        className={
          path === "/dashboard"
            ? "flex gap-2 pl-2 rounded border border-gray-400 bg-purple-600 text-white p-1"
            : "flex gap-2 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400"
        }
        href={"/dashboard"}
      >
        <RightIcon className="w-5 h-6" />
        <span>Profile</span>
      </Link>
      <Link
        className={
          path === "/dashboard/categories"
            ? "flex gap-2 pl-2 rounded border border-gray-400 bg-purple-600 text-white p-1"
            : "flex gap-2 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400"
        }
        href={"/dashboard/categories"}
      >
        <RightIcon className="w-5 h-6" />
        <span>Categories</span>
      </Link>

      <div className="space-y-4">
        <Link
          onClick={() => setIsOpen((prev) => !prev)}
          className={
            path.includes("/dashboard/menu-items")
              ? "flex gap-2 pl-2 rounded border border-gray-400 bg-purple-600 text-white p-1"
              : "flex gap-2 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400"
          }
          href={"/dashboard/menu-items"}
        >
          {isOpen ? (
            <UpIcon className="w-5 h-6" />
          ) : (
            <DownIcon className="w-5 h-6" />
          )}
          <span>Menu Items</span>
        </Link>

        <div className={isOpen ? 'block' : 'hidden'}>
          <div className="ml-11 space-y-4">
            <Link
              className={
                path === "/dashboard/menu-items/view-items"
                  ? "flex gap-1 pl-2 rounded-md text-sm border border-gray-400 bg-purple-600 text-white p-1"
                  : "flex gap-1 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded-md text-sm border border-gray-400"
              }
              href={"/dashboard/menu-items/view-items"}
            >
              <RightIcon className="w-5 h-5" />
              <span>View all items</span>
            </Link>

            <Link
              className={
                path === "/dashboard/menu-items/add-item"
                  ? "flex gap-1 pl-2 rounded-md text-sm border border-gray-400 bg-purple-600 text-white p-1"
                  : "flex gap-1 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded-md text-sm border border-gray-400"
              }
              href={"/dashboard/menu-items/add-item"}
            >
              <RightIcon className="w-5 h-5" />
              <span>Add item</span>
            </Link>
          </div>
        </div>
      </div>
      <Link
        className={
          path === "/dashboard/orders"
            ? "flex gap-2 pl-2 rounded border border-gray-400 bg-purple-600 text-white p-1"
            : "flex gap-2 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400"
        }
        href={"/dashboard/orders"}
      >
        <RightIcon className="w-5 h-6" />
        <span>Orders</span>
      </Link>
      <Link
        className={
          path === "/dashboard/users"
            ? "flex gap-2 pl-2 rounded border border-gray-400 bg-purple-600 text-white p-1"
            : "flex gap-2 pl-2 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400"
        }
        href={"/dashboard/users"}
      >
        <RightIcon className="w-5 h-6" />
        <span>Users</span>
      </Link>
    </div>
  );
};

export default DashboardMenuItem;
