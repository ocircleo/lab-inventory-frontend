"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API from "../_components/API";

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
    router.push("/");
  };
  return (
    <div className="bg-white text-gray-800 font-semibold flex items-center justify-center text-center flex-col w-full min-h-screen">
      <h1 className="text-4xl py-6 text-red-500">
        401 Error! Expired Session.
      </h1>
      <p>
        Your Session may be expired <br></br> Clear Cookies and login with new
        credential
      </p>
      <button
        onClick={clearCookies}
        className="bg-blue-500 px-4 py-2 my-2 rounded text-white font-semibold cursor-pointer hover:scale-95 duration-100 hover:bg-black"
      >
        Clear Cookies and Logout
      </button>
      <Link className="text-blue-500 underline italic" href={"/"}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default Page;
