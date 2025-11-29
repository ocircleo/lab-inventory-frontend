"use client";
import React, { useEffect, useRef, useState } from 'react';
import SearchTemplate from './SearchTemplate';
import Alert from '@/app/_components/alert/Alert';
import { API_URL } from "@/config";
import KeyValue from '@/app/_components/KeyValue/KeyValue';

const AddDeviceForm = ({ data }) => {
    const [template, setTemplate] = useState({})
    const [prevData, setPrevData] = useState([])
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState([]);
    const boxRef = useRef(null);
    const [show, setShow] = useState(false);
    // Close dropdown if clicked outside
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

        setFormData((prev) => prev.map((ele) => (ele.id == id ? { ...ele, [field]: value } : ele)));
    };
    const submitForm = async (e) => {
        try {


            e.preventDefault();
            if (loading) return
            let form = e.target;
            let submitButton = form.submitButton
            let itemName = form.itemName.value;
            let category = "item";
            submitButton.disabled = true;
            submitButton.innerText = "Adding...";


            const dataArray = [...formData, ...prevData];
            dataArray.map(ele => form[`${ele.id}-type`] ? ele.type = form[`${ele.id}-type`]?.value : ele.type = "component")
            let requestData = { name: itemName, category: category, majorComponents: dataArray, labId: data._id }
            setLoading(true);
            const req = await fetch(`${API_URL}/admin/addDevice`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(requestData),
                credentials: "include"
            })
            const res = await req.json()
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

                <fieldset className="col-span-2 pb-2 border-b-2 border-dashed">
                    <p className="font-semibold">Template Data</p>
                </fieldset>

                {prevData.map((ele, index) => <KeyValue key={ele.id} ele={ele} index={index} title={"Template"} deleteElement={deletePrevElement} updateData={updatePrevData} />)}

                <fieldset className="col-span-2 border-b-2 border-dashed pb-2">
                    <p className="font-semibold">Form Data</p>
                </fieldset>

                {formData.map((ele, index) => (<KeyValue key={ele.id} ele={ele} index={index} title={"Item"} deleteElement={deleteElement} updateData={updateData} />))}

                <div className='flex gap-3 my-10'>


                    <button type='submit' name='submitButton' className='btn bg-custom-blue inline-block text-white'>Add Item </button>




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
