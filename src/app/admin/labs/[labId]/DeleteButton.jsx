"use client"
import Alert from '@/app/_components/alert/Alert';
import { API_URL } from '@/config';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DeleteButton = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const deleteFunction = async () => {
        try {
            setLoading(true)
            const req = await fetch(`${API_URL}/admin/deleteLab/${data._id}`, {
                method: "DELETE",
                credentials: "include"
            })
            const res = await req.json()
            setLoading(false)
            if (res.success) {
                router.replace("/admin/labs")
            } else Alert("error", res.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={deleteFunction} className={` ${loading ? "bg-base-300 pointer-events-none" : "bg-red-500 pointer-events-auto"} px-12 py-2 self-center inline-block rounded text-white font-semibold cursor-pointer hover:bg-orange-500 active:scale-90 duration-100`} >
            Delete This Lab
        </button>
    );
}

export default DeleteButton;
