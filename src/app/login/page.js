"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import RightCircle from "../../components/icons/RightCircle";
import google from "/public/images/google.png";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";

export default function loginPage() {
  
  async function handleFormLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    // setLogInProgress(true);
    await signIn('credentials', { email, password})
    toast.success("Successfully Login");

    // console.log(response);
  
    // setLogInProgress(false);
  }

  return (
    <section className="mt-28 max-w-md mx-auto border p-9 py-12 shadow-lg shadow-black/25 border-gray-400 rounded-md">
      <h2 className="text-center my-2 mb-9 text-fuchsia-700 font-medium text-3xl">
        Login
      </h2>

      <form onSubmit={handleFormLogin} className="space-y-4">
        <div className="space-y-2">
          <label>
            <span className="block">Email</span>
          </label>
          <input
            
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="space-y-2 mb-5">
          <label>
            <span className="block">Password</span>
          </label>
          <input
    
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2"
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="">
          <p className="text-center text-red-600 mt-2 text-sm"></p>
          <button
            type="submit"
            className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
          >
            Login now
            <RightCircle />
          </button>
          <p className="text-center mt-2 text-sm">
            Create new account?{' '}
            <Link className="underline" href={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </form>


      <div className="space-y-4 mt-3">
        <div className="text-center text-gray-600">
          <h5 className="">Or login with provider</h5>
        </div>
        <button
          onClick={() => signIn("google", {callbackUrl: '/'})}
          className="bg-gray-100 hover:bg-gray-200 transiton-all mb-3 justify-center w-full flex gap-3 text-gray-800 p-2 border border-gray-400 rounded"
        >
          <Image
            className="w-5 place-self-center"
            src={google}
            alt="pizza-guru"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </section>
  );
}
