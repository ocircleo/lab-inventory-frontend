"use client";
import { API_URL } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import UsersList from "./UsersList";




const userCompo = ({ user, setUser, selectedLab }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    let timeOut;
    const searchUsers = (e) => {
        e.preventDefault();
        let form = formRef.current;
        let inputValue = form.temName.value;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fetchUserData(inputValue);
        }, 400);
    };
    const fetchUserData = async (text) => {
        if (text?.length == 0) return setData([]);
        try {
            setLoading(true);
            const req = await fetch(`${API_URL}/common/searchUser?user=${text}`);
            const result = await req.json();
            setData(result.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const reFetchExistingFormData = () => {
        let form = formRef.current;
        let value = form.temName.value;
        fetchUserData(value)
    }
    useEffect(() => {
        if (selectedLab?._id) {
            let form = formRef.current;
            form.temName.value = "@staff-" + selectedLab._id;
            fetchUserData("@staff-" + selectedLab?._id)
        } else fetchUserData("")
    }, [selectedLab]);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Search Users</h1>
            <form ref={formRef} onSubmit={searchUsers}>
                <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                    <input
                        onChange={searchUsers}
                        name="temName"
                        type="text"
                        id="temName"
                        required
                        className=" p-2 border-2 border-gray-600 rounded bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                        placeholder="Email address"
                    />
                </fieldset>
            </form>
            <p
                className={`text-xs font-semibold ${loading ? "visible" : "invisible"
                    } p-1 `}
            >
                Loading...
            </p>
            {<UsersList selectedLab={selectedLab} setUser={setUser} user={user} data={data} reFetchExistingFormData={reFetchExistingFormData} />}
        </div>
    );
};

export default userCompo;
