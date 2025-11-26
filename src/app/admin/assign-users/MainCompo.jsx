"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LabCompo from './LabCompo';
import UsersCompo from './UserCompo';
import API from '@/app/_components/API';
import Alert from '@/app/_components/alert/Alert';
import Swal from 'sweetalert2';

const MainCompo = ({ data }) => {
    const [selectedLab, setLab] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [tab, setTab] = useState("labs")
    const router = useRouter()
    const reset = () => {
        if (data?._id) {
            setLab({})
            setUser({})
            router.push("/admin/assign-users")
        } else {
            setLab({})
            setUser({})
        }
    }
    const assignUser = async () => {
        try {
            if (!selectedLab?._id) return Alert("error", "Lab Must be selected");
            if (!user?._id) return Alert("error", "No User selected");
            const requestData = { labId: selectedLab._id, staffId: user._id };
            const req = await fetch(`${API}/admin/assignStaff`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(requestData)
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
            return { success: false, message: "Some Error Happened while requesting" }
        }

    }
    const makeUserStaff = async () => {
        try {
            if (!user?._id) return Alert("error", "No User selected");

            const requestData = { staffId: user._id };
            const req = await fetch(`${API}/admin/makeStaff`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(requestData)
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
            return { success: false, message: "Some Error Happened while requesting" }
        }
    }
    const assignUserToLab = async (e) => {
        e.preventDefault();
        if (loading) return;
        let form, assign, resetButton;
        form = e.target;
        assign = form.assign;
        resetButton = form.reset;

        assign.disabled = true;
        resetButton.disabled = true;

        let result = await assignUser();
        if (result?.message == "user-not-staff") {
            await Swal.fire({
                theme: 'dark',
                title: "The User is not a staff !!",
                text: "Want to make the user staff ?",
                showCancelButton: true,
                confirmButtonColor: "red",
                confirmButtonText: "Yes",
            }).then(async (userResponse) => {
                if (userResponse.isConfirmed) {
                    const newResult = await makeUserStaff()
                    if (newResult?.success) result = await assignUser();
                }
            });
        }
        if (result?.success) {
            Alert("success", result.message)
            reset()
        } else {
            Alert("error", result.message)
        }
        assign.disabled = false;
        resetButton.disabled = false;
        setLoading(false)
        //so on
    }
    useEffect(() => {
        if (data?._id) setLab(data)
    }, [])
    return (
        <div>
            <form onSubmit={assignUserToLab} className='flex gap-4' >

                <div className='bg-base-300 p-4 text-sm font-semibold rounded inline-block'>
                    <p>
                        Selected Lab: {selectedLab._id ? <span className='text-custom-blue text-base'> {selectedLab.name}</span> : <span className='text-orange-500 text-base'> No Lab Selected</span>}
                    </p>
                    <p>
                        Lab Id:  {selectedLab._id ? selectedLab._id : ""}

                    </p>
                </div>
                <div className='bg-base-300 p-4 text-sm font-semibold rounded inline-block'>
                    <p>
                        Selected User: {user._id ? <span className='text-custom-blue text-base'> {user.name}</span> : <span className='text-orange-500 text-base'> No User Selected</span>}
                    </p>
                    <p>
                        Email:  {user.email_address ? user.email_address : ""}

                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='bg-custom-blue btn' type='submit' name='assign'>Assign Selected</button>
                    <button className='bg-orange-600 btn' onClick={reset} type='reset' name='reset'>Reset</button>
                </div>
            </form>
            <div className='mt-10 overflow-x-hidden'>
                <div className='flex gap-4'>
                    <button onClick={() => setTab("labs")} className={`text-lg pe-2 cursor-pointer hover:text-custom-blue ${tab == "labs" ? "text-green-500 border-b-2 " : ""}`}>Labs</button>
                    <button onClick={() => setTab("users")} className={`text-lg pe-2 cursor-pointer hover:text-custom-blue  ${tab == "users" ? "text-green-500 border-b-2 " : ""}`}>Users</button>
                    <button onClick={() => setTab("split")} className={`text-lg pe-2 cursor-pointer hover:text-custom-blue  ${tab == "split" ? "text-green-500 border-b-2 " : ""}`}>Split View</button>


                </div>
                <div className={`flex ${tab == "split" ? "gap-2" : ""} mt-4`}>
                    <div className={`min-h-96 bg-base-200  duration-500 shrink-0 ${tab == "labs" ? "w-full" : tab == "users" ? "-translate-x-full w-full" : "w-1/2 "} `}>
                        <LabCompo setLab={setLab} selectedLab={selectedLab} />
                    </div>
                    <div className={`min-h-96 bg-base-200 duration-500  shrink-0 ${tab == "users" ? "w-full -translate-x-full" : tab == "labs" ? "w-full " : "w-1/2"} `}>
                        <UsersCompo selectedLab={selectedLab} setUser={setUser} user={user} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainCompo;
