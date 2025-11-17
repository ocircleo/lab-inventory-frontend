"use client";
import React from "react";
import API from "../components/API";
import { useRouter } from "next/navigation";
import Alert from "../components/alert/Alert";

const Page = () => {
  const router = useRouter();
  const clearCookies = async () => {
    const res = await fetch(`${API}/auth/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success) router.push("/");
    else Alert("Error", data.message);
    setTimeout(() => router.push("/"), 2000);
  };
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col">
      <button
        onClick={clearCookies}
        className="bg-blue-500 px-4 py-2 my-2 rounded text-white font-semibold cursor-pointer hover:scale-95 duration-100 hover:bg-black"
      >
        Clear Cookies and Logout
      </button>
    </div>
  );
};

export default Page;
