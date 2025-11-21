"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Alert from "../_components/alert/Alert";
import { AuthContext } from "../state/AuthProvider";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { logOut } = useContext(AuthContext);
  const clearCookies = async () => {
    const result = await logOut();
    if (result) Alert("Success", "Logged out successfully");
    else Alert("Error", data.message);
    setTimeout(() => router.push("/"), 1000);
  };
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col">
      <h1 className="text-xl font-bold py-8">Are you sure you want to logout?</h1>
      <Link href={"/"} className="text-blue-400 underline py-5">Go back to home</Link>
      <button
        onClick={clearCookies}
        className="bg-blue-500 px-4 py-2 my-2 rounded text-white font-semibold cursor-pointer hover:scale-95 duration-100 hover:bg-black"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
