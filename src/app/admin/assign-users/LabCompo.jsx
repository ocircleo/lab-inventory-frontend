"use client";

import React, { useEffect, useRef, useState } from "react";
import LabList from "./LabsList";
import { API_URL } from "@/config";


const LabCompo = ({ setLab, selectedLab }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    let timeOut;
    const searchLabs = (e) => {
        e.preventDefault();
        let form = formRef.current;
        let inputValue = form.temName.value;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fetchLabData(inputValue);
        }, 400);
    };
    const fetchLabData = async (text) => {
        if (text.length == 0) return setData([]);
        try {
            setLoading(true);

            const req = await fetch(`${API_URL}/common/searchLab?lab=${text}`);
            const result = await req.json();

            setData(result.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);

        }
    };
    useEffect(() => {
        fetchLabData("@all");
    }, []);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Search Labs</h1>
            <form ref={formRef} onSubmit={searchLabs}>
                <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                    <input
                        onChange={searchLabs}
                        name="temName"
                        type="text"
                        id="temName"
                        defaultValue={"@all"}
                        required
                        className=" p-2 border-2 border-gray-600 rounded bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                        placeholder="Lab Name"
                    />
                </fieldset>
            </form>
            <p
                className={`text-xs font-semibold ${loading ? "visible" : "invisible"
                    } p-1 `}
            >
                Loading...
            </p>
            {<LabList setLab={setLab} selectedLab={selectedLab} data={data} />}
        </div>
    );
};

export default LabCompo;

//form
//load data
//
