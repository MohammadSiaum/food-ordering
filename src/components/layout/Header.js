"use client";

import { useSession, signOut } from "next-auth/react";
import { useProfile } from "../UserProfile";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

export default function Header() {
  const { loading, data } = useProfile();
  const session = useSession();
  const status = session?.status;
  let userName = session?.data?.user?.name;

  const {cartProducts} = useContext(CartContext);

  if (userName && userName?.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  if (status === "loading") {
    // userName = ' ';
    return (
      <div className="text-center mt-2">
        <h2>Loading..</h2>
      </div>
    );
  }

  
  return (
    <header className="sticky top-0 p-2 px-4 rounded bg-purple-100">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-16">
          <div>
            <Link className="text-fuchsia-700 font-semibold text-2xl" href="/">
              PIZZA <span className="text-gray-900">guru</span>
            </Link>
          </div>
          <nav className="flex items-center gap-7 text-gray-900">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            {data?.admin && (
              <Link
                className="bg-purple-400 hover:bg-purple-500 border border-gray-300 p-1 px-2 rounded"
                href={"/dashboard"}
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>

        <nav className="flex items-center gap-5 text-gray-900">
          {status === "authenticated" ? (
            <>
              <Link
                className="text-md whitespace-nowrap font-semibold"
                href={"/profile"}
              >
                Hello, {userName}
              </Link>

              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="bg-gray-700 hover:bg-gray-800 transition-all text-white rounded-full px-7 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="bg-gray-700 hover:bg-gray-800 transition-all text-white rounded-full px-9 py-2"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className="bg-fuchsia-700 hover:bg-fuchsia-800 transition-all text-white rounded-full px-6 py-2"
                href={"/register"}
              >
                Register
              </Link>
            </>
          )}
          
          <Link 
             className="relative" 
             href={'/cart'}>
            <ShoppingCartIcon />
            <span 
               className="absolute -top-3 -right-3 bg-fuchsia-700 text-white w-5 h-5 p-1 text-center text-xs rounded-full leading-3"
            
              >{cartProducts.length}</span>
           </Link>

        </nav>
      </div>
    </header>
  );
}
