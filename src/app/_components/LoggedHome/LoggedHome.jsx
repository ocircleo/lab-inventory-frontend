import Link from 'next/link';
import React from 'react';
import ThemeButton from '../theme/ThemeButton';

const LoggedHome = ({ user }) => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col">
            <div className="text-center my-10">
                <Link href={"/dev"} className="text-3xl py-3 hover:underline underline-offset-4 hover:text-custom-blue">Welcome To Inventory Manager</Link>
                <p className='mt-4 mb-8'>Hello <span className=' font-bold'>{user?.name}</span> <span className='text-custom-blue font-semibold px-2'>|</span>Mail: <span className='font-bold bg-base-300 px-3 py-1 border border-gray-500 rounded'>{user?.email_address}</span></p>
                {user?.role == "user" ? <><Link href={"/user"} className="bg-custom-blue btn mx-3 hover:bg-green-500">Dashboard </Link>
                    <Link href={"/user/logout"} className="bg-orange-500 btn mx-3 hover:bg-red-500">Log Out </Link></> : user?.role == "staff" ? <><Link href={"/staff"} className="bg-custom-blue btn mx-3 hover:bg-green-500">Dashboard </Link>
                        <Link href={"/staff/logout"} className="bg-orange-500 btn mx-3 hover:bg-red-500">Log Out </Link></> : <><Link href={"/admin"} className="bg-custom-blue btn mx-3 hover:bg-green-500">Dashboard </Link>
                    <Link href={"/admin/logout"} className="bg-orange-500 btn mx-3 hover:bg-red-500">Log Out</Link></>}


            </div>
            <div className="flex border px-2 py-1 border-gray-300 rounded" >
                <p className="font-semibold">Theme</p>
                <div className="custom-spin">
                    <ThemeButton />

                </div>

            </div>
        </div>
    );
}

export default LoggedHome;
