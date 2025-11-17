"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    let timer = document.getElementById("timer");
    let time = 4;
    let interval = setInterval(() => {
      if (time == 0) {
        clearInterval(interval);
        router.replace("/");
      }
      timer.innerText = time;
      time--;
    }, 1000);
  }, []);
  return (
    <div className="bg-white text-gray-800 font-semibold flex items-center justify-center text-center flex-col w-full min-h-screen">
      <h1 className="text-4xl py-6 text-red-500">409 Error! Page is Private</h1>
      <p>
        The requested page is protected <br></br> Please try Logging in with
        valid credential
      </p>
      <p>
        Redirecting to Home page in :{" "}
        <span id="timer" className="text-red-500 font-bold">
          5
        </span>{" "}
        second
      </p>
      <Link className="text-blue-500 underline italic" href={"/"}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default Page;
