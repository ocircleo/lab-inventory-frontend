"use client";
import React, { useEffect, useRef, useState } from 'react';
import SearchTemplate from './SearchTemplate';
import Alert from '@/app/_components/alert/Alert';
import API from '@/app/_components/API';

const AddDeviceForm = ({ data }) => {
    const [template, setTemplate] = useState({})
    const [prevData, setPrevData] = useState([])
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState([]);
    const boxRef = useRef(null);
    const [show, setShow] = useState(false);
    // Close dropdown if clicked outside
    // Create new element
    const createElement = (type) => {
        const id = Date.now();
        const newElement = { id, key: "", value: "", type };
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
    const submitForm = async (e) => {
        try {


            e.preventDefault();
            if (loading) return
            let form = e.target;
            let submitButton = form.submitButton
            let itemCount = form.itemCount.value;
            let itemName = form.itemName.value;
            let category = form.category.value;
            // submitButton.disabled = true;
            // submitButton.innerText = "Adding...";


            const dataArray = [...formData, ...prevData];
            let requestData = { name: itemName, category: category, majorComponents: dataArray, labId: data._id, itemCount }
          
            setLoading(true);
            const req = await fetch(`${API}/admin/addDevice`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(requestData),
                credentials: "include"
            })
            const res = await req.json()
            console.log(res);
            submitButton.disabled = false;
            submitButton.innerText = "Add Item";
            setLoading(false)

            if (res.success) Alert("success", res.message)
            else Alert("error", res.message)
        } catch (error) {
            console.log(error);
            Alert("error", error.message)
        }
    };
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
            <SearchTemplate setPrevData={setPrevData} setTemplate={setTemplate} />

            <form onSubmit={submitForm} className="grid grid-cols-2 gap-4 w-full mt-8">
                <fieldset className="flex flex-col  gap-2 mb-3">
                    <label htmlFor={"itemName"} className='capitalize font-semibold text-custom-blue'>Item Name</label>

                    <input
                        type={"text"}
                        name={`itemName`}
                        placeholder="Item Name"
                        required
                        className="p-2 bg-base-300 w-full"
                    />
                </fieldset>
                <fieldset className="flex flex-col  gap-2 mb-3">
                    <label htmlFor={"category"} className='capitalize font-semibold text-custom-blue'>Category Name</label>
                    <input
                        type={"text"}
                        name={`category`}
                        placeholder="category Name"
                        defaultValue={template?.category}
                        required
                        className="p-2 bg-base-300 w-full"
                    />
                </fieldset>
                <fieldset className="col-span-2 pb-2 border-b-2 border-dashed">
                    <p className="font-semibold">Template Data</p>
                </fieldset>
                {prevData.map((ele, index) => (
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
                                    onChange={updatePrevData}
                                    placeholder="Key"
                                    className="p-2 bg-base-300 w-full"
                                />

                                <input
                                    type={ele.type === "number" ? "number" : "text"}
                                    name={`${ele.id}-value`}
                                    value={ele.value}
                                    onChange={updatePrevData}
                                    placeholder="Value"
                                    className="p-2 bg-base-300 w-full"
                                />

                                <button
                                    type="button"
                                    className="btn bg-red-600"
                                    onClick={() => deletePrevElement(ele.id)}
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
                                    onChange={updatePrevData}
                                    placeholder="Key"
                                    className="p-2 bg-base-300"
                                />

                                <textarea
                                    name={`${ele.id}-value`}
                                    value={ele.value}
                                    onChange={updatePrevData}
                                    rows={4}
                                    placeholder="Description"
                                    className="p-2 bg-base-300"
                                />

                                <button
                                    type="button"
                                    className="btn bg-red-600"
                                    onClick={() => deletePrevElement(ele.id)}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}
                <fieldset className="col-span-2 border-b-2 border-dashed pb-2">
                    <p className="font-semibold">Form Data</p>
                </fieldset>

                {formData.map((ele, index) => (
                    <div
                        key={ele.id}
                        className={`col-span-2 ${ele.type === "description" ? "lg:col-span-1" : ""
                            } flex flex-col gap-2`}
                    >
                        <p>Template Field: {index + 1} (new)</p>

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

                <div className='flex gap-3 my-10'>
                    {template._id ? <>
                        <input type="number" name='itemCount' min={1} defaultValue={1} placeholder='No of Item' className='bg-base-300 border-gray-500 border-2 p-1 rounded ' />
                        <button type='submit' name='submitButton' className='btn bg-custom-blue inline-block text-white'>Add Item </button>
                    </> : <p className='font-semibold text-orange-500'>Please Select an template first</p>}



                </div>
            </form>
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
}

export default AddDeviceForm;
