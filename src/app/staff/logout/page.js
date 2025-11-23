"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/app/state/AuthProvider";
import Alert from "@/app/_components/alert/Alert";

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
    <div className="p-6  min-h-screen ">
      <h1 className="text-xl font-bold">Log Out Page</h1>
      <div className="p-8 flex flex-col items-center w-full md:w-3/4 lg:w-1/2 bg-base-300 mt-8 ">
        <p>You Want to Log Out?</p>
        <div className="mt-4">
          <button
            onClick={clearCookies}
            className="bg-red-500 px-4 py-2 my-2 text-white font-semibold cursor-pointer hover:scale-95 duration-100 hover:bg-black"
          >
            Yes, Logout
          </button>
          <p className="px-12 py-2">Or</p>
          <Link href={"/"} className="text-blue-400 underline py-5">
            Go back to Home ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
