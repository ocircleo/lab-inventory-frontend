"use client"
import Link from "next/link";
import ThemeButton from "../_components/theme/ThemeButton";

const DefaultPage = ({ error }) => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col">
            <div className="text-center my-10">
                <h1 className="text-3xl py-3 ">Welcome To Inventory Manager</h1>
                <Link href={"/login"} className="bg-custom-blue btn mx-3 hover:bg-orange-500">Login </Link>
                <Link href={"/register"} className="bg-green-500 hover:bg-orange-500 btn mx-3">Register </Link>

            </div>
            <div className="flex border px-2 py-1 border-gray-300 rounded" >
                <p className="font-semibold">Theme</p>
                <div className="custom-spin">
                    <ThemeButton />

                </div>

            </div>
            {error && <p>Some error Happened in the server while loading</p>}
        </div>
    );
};
export default DefaultPage