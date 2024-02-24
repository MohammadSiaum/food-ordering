'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



const UserTabs = ({ isAdmin }) => {
   const path = usePathname();
   return (
    <>
      {isAdmin && (
        <div className="mt-14 mx-auto text-center justify-center flex gap-5">
          <Link
            className={path === '/profile' ? 'bg-fuchsia-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1' : 'bg-gray-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1'}
            href={"/profile"}
          >
            Profile
          </Link>
          <Link
            className={path === '/categories' ? 'bg-fuchsia-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1' : 'bg-gray-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1'}
            href={"/categories"}
          >
            Categories
          </Link>
          <Link
            className={path === '/menu-items' ? 'bg-fuchsia-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1' : 'bg-gray-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1'}
            href={"/menu-items"}
          >
            Menu Items
          </Link>
          <Link
            className={path === '/users' ? 'bg-fuchsia-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1' : 'bg-gray-300 focus:ring focus:ring-fuchsia-600 focus:bg-fuchsia-200 rounded w-28 p-1'}
            href={"/users"}
          >
            Users
          </Link>
        </div>
      )}
    </>
  );
};

export default UserTabs;
