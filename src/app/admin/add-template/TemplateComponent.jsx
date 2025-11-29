"use client";
import Alert from "@/app/_components/alert/Alert";
import fetchWithTimeOut from "@/app/_components/fetchwithtimeout/fetchWithTimeOut";
import KeyValue from "@/app/_components/KeyValue/KeyValue";
import { API_URL } from "@/config";
import React, { useState, useRef, useEffect } from "react";

const TemplateComponent = () => {
    const [formData, setFormData] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const boxRef = useRef(null);

    // Create new element
    const createElement = (dataType) => {
        const id = Date.now();
        const newElement = { id, key: "", value: "", dataType: dataType, type: "component" };
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
        dataModel.map(ele => form[`${ele.id}-type`] ? ele.type = form[`${ele.id}-type`]?.value : ele.type = "component")
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

                {formData.map((ele, index) => <KeyValue key={ele.id} ele={ele} index={index} title={"Template"} deleteElement={deleteElement} updateData={updateData} />)}

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
        const req = await fetchWithTimeOut(API_URL + "/admin/add-template", {
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