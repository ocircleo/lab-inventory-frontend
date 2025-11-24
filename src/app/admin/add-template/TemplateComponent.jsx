"use client";
import Alert from "@/app/_components/alert/Alert";
import API from "@/app/_components/API";
import fetchWithTimeOut from "@/app/_components/fetchwithtimeout/fetchWithTimeOut";
import React, { useState, useRef, useEffect } from "react";

const TemplateComponent = () => {
    const [formData, setFormData] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const boxRef = useRef(null);

    // Create new element
    const createElement = (type) => {
        const id = Date.now();
        const newElement = { id, key: "", value: "", type };
        setFormData((prev) => [...prev, newElement]);
        setShow(false);
    };

    // Delete element
    const deleteElement = (id) => {
        setFormData((prev) => prev.filter((ele) => ele.id !== id));
    };

    // Update key/value
    const updateData = (e) => {
        const [id, field] = e.target.name.split("-");
        let value = e.target.value;

        setFormData((prev) =>
            prev.map((ele) =>
                ele.id == id ? { ...ele, [field]: value } : ele
            )
        );
    };

    // Submit form
    const submitForm = async (e) => {
        e.preventDefault();
        if (loading) return
        let form = e.target;
        let submitButton = form.submitButton
        let category, dataModel;

        category = form.temName.value;
        dataModel = formData;
        const data = { category, dataModel }

        submitButton.disabled = true;
        submitButton.innerText = "Adding...";
        setLoading(true);
       
        const result = await addTemplate(data)

        submitButton.disabled = false;
        submitButton.innerText = "Add Template";
        setLoading(false)

        if (result.success) Alert("success", "Created Template Successfully")
        else Alert("error", result.message)
    };
    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <form onSubmit={submitForm} className="grid grid-cols-2 gap-4 w-full mt-8">
                <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                    <label htmlFor="temName" className='p-1'>Template Category (Unique name)</label>
                    <input

                        name="temName"
                        type="text"
                        id='temName'
                        required
                        className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                        placeholder="Template Name"
                    />
                </fieldset>
                {formData.map((ele, index) => (
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
                                    value={ele.key}
                                    onChange={updateData}
                                    placeholder="Key"
                                    className="p-2 bg-base-300 w-full"
                                />

                                <input
                                    type={ele.type === "number" ? "number" : "text"}
                                    name={`${ele.id}-value`}
                                    value={ele.value}
                                    onChange={updateData}
                                    placeholder="Value"
                                    className="p-2 bg-base-300 w-full"
                                />

                                <button
                                    type="button"
                                    className="btn bg-red-600"
                                    onClick={() => deleteElement(ele.id)}
                                >
                                    Delete
                                </button>
                            </fieldset>
                        ) : (
                            <>
                                <input
                                    required
                                    name={`${ele.id}-key`}
                                    value={ele.key}
                                    onChange={updateData}
                                    placeholder="Key"
                                    className="p-2 bg-base-300"
                                />

                                <textarea
                                    name={`${ele.id}-value`}
                                    value={ele.value}
                                    onChange={updateData}
                                    rows={4}
                                    placeholder="Description"
                                    className="p-2 bg-base-300"
                                />

                                <button
                                    type="button"
                                    className="btn bg-red-600"
                                    onClick={() => deleteElement(ele.id)}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}

                <div className="col-span-2   my-6">
                    <button name="submitButton" className="btn inline-block bg-custom-blue text-white">
                        Add Template
                    </button>
                </div>
            </form>

            {/* Add field button */}
            <div className="relative flex justify-center items-center">
                <button
                    className="btn bg-custom-blue text-white"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShow((prev) => !prev);
                    }}
                >
                    Add Field
                </button>

                {show && (
                    <div
                        ref={boxRef}
                        className="absolute bottom-12 w-36 bg-base-100 border p-1 flex flex-col gap-1"
                    >
                        <button className="btn" onClick={() => createElement("text")}>
                            Text
                        </button>
                        <button className="btn" onClick={() => createElement("description")}>
                            Description
                        </button>
                        <button className="btn" onClick={() => createElement("number")}>
                            Number
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateComponent;



async function addTemplate(data) {
    try {
        const req = await fetchWithTimeOut(API + "/admin/add-template", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
            credentials: "include",
        }, 10000)
        const res = await req.json();
        return res;
    } catch (error) {
        return { success: false, message: error.message }
    }
}