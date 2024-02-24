"use client";

import Image from "next/image";
import RightCircle from "../../components/icons/RightCircle";
import google from "/public/images/google.png";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);

  async function handleFormRegister(event) {
    event.preventDefault();
    if (!(password.length >= 6)) {
      setPassError(
        "Password have to at least 6 characters with uppercase, lowercase and 2 digits"
      );
      return;
    }

    const response = await fetch("../api/register", {
      method: "POST",
      body: JSON.stringify({ name, contact, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setPassError("");
      toast.success("Successfully Register");
      // setCreatingUser(false);
      setCreatingUser(true);

      // return redirect("/login");
    }
  }

  return (
    <section className="mt-20 max-w-md mx-auto border p-9 shadow-lg shadow-black/25 border-gray-400 rounded-md">
      <h2 className="text-center my-2 mb-9 text-fuchsia-700 font-medium text-3xl">
        Register
      </h2>

      <form onSubmit={handleFormRegister} className="space-y-4">
        <div className="space-y-2">
          <label>
            <span className="block">Your Name</span>
          </label>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2 "
            type="text"
            placeholder="name"
            disabled={creatingUser}
            required
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="block">Contact Number</span>
          </label>
          <input
            value={contact}
            onChange={(ev) => setContact(ev.target.value)}
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2 "
            type="contact-number"
            placeholder="number"
            disabled={creatingUser}
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="block">Email</span>
          </label>
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2"
            type="email"
            placeholder="email"
            disabled={creatingUser}
            required
          />
        </div>
        <div className="space-y-2 mb-5">
          <label>
            <span className="block">Password</span>
          </label>
          <input
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="block text-gray-700 text-md rounded w-full border border-gray-400 p-2"
            type="password"
            placeholder="password"
            disabled={creatingUser}
            required
          />
        </div>
        <div className="">
          <p className="text-center text-red-600 mt-2 text-sm">{passError}</p>
          <button
            type="submit"
            disabled={creatingUser}
            className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-5 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
          >
            Register now
            <RightCircle />
          </button>
          <p className="text-center mt-2 text-sm">
            Already have any account?{" "}
            <Link className="underline text-md" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </form>

      <div className="">
        <div className="text-center my-3 text-gray-600">
          <h5 className="">Or login with provider</h5>
        </div>
        <button
          type="button"
          onClick={() => signIn("google", {callbackUrl: '/'})}
          disabled={creatingUser}
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
