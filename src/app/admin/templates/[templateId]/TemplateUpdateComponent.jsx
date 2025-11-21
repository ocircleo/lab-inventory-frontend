"use client";
import Alert from "@/app/_components/alert/Alert";
import API from "@/app/_components/API";
import fetchWithTimeOut from "@/app/_components/fetchwithtimeout/fetchWithTimeOut";
import React, { useState, useRef, useEffect } from "react";

const TemplateUpdateComponent = ({ data }) => {
    const [loading, setLoading] = useState(false)

    // Submit form
    const submitForm = async (e) => {
        e.preventDefault();
        if (loading) return
        let form = e.target;
        let submitButton = form.submitButton
        submitButton.disabled = true;
        submitButton.innerText = "Updating...";
        const dataArray = [];

        data.dataModel.map(ele => {
            let dataElement = { id: ele.id, key: ele.key, value: ele.value, type: ele.type }
            let formValue = form[ele.id + "-value"].value;
            dataElement.value = formValue;
            dataArray.push(dataElement);
        })

        setLoading(true);
        const result = await updateTemplate(data._id, dataArray)

        submitButton.disabled = false;
        submitButton.innerText = "Update Template";
        setLoading(false)

        if (result.success) Alert("success", "Updated Template Successfully")
        else Alert("error", result.message)
    };


    return (
        <div>
            <form onSubmit={submitForm} className="grid grid-cols-2 gap-4 w-full mt-8">
                <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                    <label htmlFor="temName" className='p-1'>Template Category (Unique name)</label>
                    <input

                        name="temName"
                        type="text"
                        id='temName'
                        defaultValue={data?.category}
                        disabled
                        required
                        className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                        placeholder="Template Name"
                    />
                </fieldset>
                {data?.dataModel?.map((ele, index) => (
                    <div
                        key={ele.id}
                        className={`col-span-2 ${ele.type === "description" ? "lg:col-span-1" : ""
                            } flex flex-col gap-2`}
                    >
                        <p>Template Field: {index + 1}</p>

                        {ele.type !== "description" ? (
                            <fieldset className="flex flex-col md:flex-row gap-2">
                                <input
                                    required
                                    type="text"
                                    name={`${ele.id}-key`}
                                    defaultValue={ele.key}
                                    disabled
                                    placeholder="Key"
                                    className="p-2 bg-base-300 w-full"
                                />

                                <input
                                    type={ele.type === "number" ? "number" : "text"}
                                    name={`${ele.id}-value`}
                                    defaultValue={ele.value}
                                    placeholder="Value"
                                    className="p-2 bg-base-300 w-full"
                                />
                            </fieldset>
                        ) : (
                            <>
                                <input
                                    required
                                    name={`${ele.id}-key`}
                                    defaultValue={ele.key}
                                    disabled
                                    placeholder="Key"
                                    className="p-2 bg-base-300"
                                />

                                <textarea
                                    name={`${ele.id}-value`}
                                    defaultValue={ele.value}
                                    rows={4}
                                    placeholder="Description"
                                    className="p-2 bg-base-300"
                                />
                            </>
                        )}
                    </div>
                ))}

                <div className="col-span-2 flex justify-center my-6">
                    <button name="submitButton" className="btn btn-block bg-custom-blue text-white">
                        Update Template
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TemplateUpdateComponent;



async function updateTemplate(id, data) {
    try {
        const req = await fetchWithTimeOut(API + "/admin/update-template", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, data }),
            credentials: "include",
        }, 10000)
        const res = await req.json();
        return res;
    } catch (error) {
        return { success: false, message: error.message }
    }
}