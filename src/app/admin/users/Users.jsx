import API from '@/app/_components/API';
import stringClip from '@/app/utls/stringClip/stringClip';
import Link from 'next/link';
import React from 'react';
/**
 * A React component that fetches and displays a list of users based on the provided query.
 * @param {string} query - web Url query string for filtering users 
 * @returns {JSX.Element } - A React component that displays a list of users based on the provided query.
 */
const Users = async ({ query }) => {
    const { users, message, error } = await (async function () {
        try {
            const res = await fetch(API + "/admin/users" + query, {
                method: "GET",
                credentials: "include",
                headers: { "content-type": "application/json" },
                cache: "no-store",
            });
            const result = await res.json();
            if (result.error) return { users: [...new Array(12).keys()], message: result.message, error: true };
            return { users: result.data, message: result.message, error: !result.success };
        } catch (error) {
            console.log(error);
            return { users: new Array(16), message: error.message, error: true };
        }
    })();

    return (
        <div className='bg-base-100 rounded min-h-20 p-5 me-3'>
            <div className='text-center font-semibold rounded mb-2 grid bg-base-200 grid-cols-6 grid-rows-2 md:grid-rows-1 gap-2 justify-between items-center'>
                <div className='col-span-3 md:col-span-2    p-3'>
                    <p>User</p>
                </div>
                <div className='col-span-3 md:col-span-1'>
                    <p>Role</p>
                </div>
                <div className='col-span-3 md:col-span-2 h-full flex items-center justify-center'>
                    <p >@Email</p>

                </div>
                <div className='col-span-3 md:col-span-1'>
                    Action
                </div>
            </div>
            {users.map((ele, index) => <div key={index} className=' bg-base-200 rounded mb-2 grid grid-cols-6 grid-rows-2 md:grid-rows-1 gap-2 items-center text-center'>
                {/* name, role, email, phone,actionButton,profileIcon */}
                <div className='flex items-center  gap-3 col-span-4 md:col-span-2  p-3'>
                    <span className='w-10 aspect-square rounded-full flex items-center justify-center bg-green-500 font-semibold text-lg text-white '>S</span>
                    <p>{stringClip("salman Hossain", 10)}</p>

                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='inline-block font-semibold bg-amber-400 px-2 rounded'>Admin</p>

                </div>
                <div className='col-span-4 md:col-span-2  h-full flex items-center overflow-clip justify-center'>

                    <p className='underline text-blue-400 inline-block'>{stringClip("salmanhossain11222626@gmail.com", 22)}</p>
                </div>
                <div className='col-span-2 md:col-span-1'>

                    <Link href={"/admin/users/helloworld"} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start cursor-pointer"
                    >
                        Detail
                    </Link>
                </div>
            </div>
            )}
        </div>
    );
}

export default Users;
