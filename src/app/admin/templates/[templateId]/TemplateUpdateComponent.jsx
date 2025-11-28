"use client";
import Alert from "@/app/_components/alert/Alert";
import API from "@/app/_components/API";
import fetchWithTimeOut from "@/app/_components/fetchwithtimeout/fetchWithTimeOut";
import KeyValue from "@/app/_components/KeyValue/KeyValue";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const TemplateUpdateComponent = ({ data }) => {
    let prevDataModel = data?.dataModel || [];
    const [prevData, setPrevData] = useState(prevDataModel);
    const [formData, setFormData] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const boxRef = useRef(null);
    const router = useRouter()

    // Create new element
    const createElement = (dataType) => {
        const id = Date.now();
        const newElement = { id, key: "", value: "", dataType: dataType, type: "component" };
        setFormData((prev) => [...prev, newElement]);
        setShow(false);
    };

    // Delete element
    const deletePrevElement = (id) => {
        setPrevData((prev) => prev.filter((ele) => ele.id !== id));
    };
    // Delete element
    const deleteElement = (id) => {
        setFormData((prev) => prev.filter((ele) => ele.id !== id));
    };

    // Update key/value
    const updatePrevData = (e) => {
        const [id, field] = e.target.name.split("-");
        let value = e.target.value;

        setPrevData((prev) =>
            prev.map((ele) => (ele.id == id ? { ...ele, [field]: value } : ele))
        );
    };
    // Update key/value
    const updateData = (e) => {
        const [id, field] = e.target.name.split("-");
        let value = e.target.value;

        setFormData((prev) =>
            prev.map((ele) => (ele.id == id ? { ...ele, [field]: value } : ele))
        );
    };

    // Submit form
    const submitForm = async (e) => {
        e.preventDefault();
        if (loading) return;
        let form = e.target;
        let submitButton = form.submitButton;
        let category, dataModel;

        category = form.temName.value;
        dataModel = [...formData, ...prevData];
        dataModel.map(ele => form[`${ele.id}-type`] ? ele.type = form[`${ele.id}-type`]?.value : ele.type = "component")
        const newData = dataModel;
        submitButton.disabled = true;
        submitButton.innerText = "Updating...";
        setLoading(true);

        const result = await updateTemplate(data._id, newData);

        submitButton.disabled = false;
        submitButton.innerText = "Update Template";
        setLoading(false);

        if (result.success) {
            Alert("success", result?.message);
        }
        else Alert("error", result.message);
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
            <form
                onSubmit={submitForm}
                className="grid grid-cols-2 gap-4 w-full mt-8"
            >
                <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                    <label htmlFor="temName" className="p-1">
                        Template Category (Unique name)
                    </label>
                    <input
                        name="temName"
                        type="text"
                        id="temName"
                        defaultValue={data?.category}
                        required
                        className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                        placeholder="Template Name"
                    />
                </fieldset>
                <fieldset className="col-span-2 pb-2 border-b-2 border-dashed">
                    <p className="font-semibold">Template Data</p>
                </fieldset>
                {prevData.map((ele, index) => <KeyValue key={ele.id} ele={ele} index={index} title={"Template"} deleteElement={deletePrevElement} updateData={updatePrevData} />)}
                <fieldset className="col-span-2 border-b-2 border-dashed pb-2">
                    <p className="font-semibold">Form Data</p>
                </fieldset>

                {formData.map((ele, index) => <KeyValue key={ele.id} ele={ele} index={index} title={"Template"} deleteElement={deleteElement} updateData={updateData} />)}

                <div className="col-span-2   my-6">
                    <button
                        name="submitButton"
                        className="btn inline-block bg-custom-blue text-white"
                    >
                        Update Template
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
                        <button
                            className="btn"
                            onClick={() => createElement("description")}
                        >
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

export default TemplateUpdateComponent;

async function updateTemplate(id, data) {
    try {
        const req = await fetchWithTimeOut(
            API + "/admin/update-template",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, data }),
                credentials: "include",
            },
            10000
        );
        const res = await req.json();
        return res;
    } catch (error) {
        return { success: false, message: error.message };
    }
}
