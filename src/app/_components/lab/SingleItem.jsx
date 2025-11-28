"use client";
import React, { useState } from "react";
import { MdMoveUp } from "react-icons/md";

const SingleItem = ({ ele, index, selectAndSet }) => {
    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);


    function selectThis() {
        let selectedItemDetail = { parentId: undefined, parentType: "lab", childType: "item", items: [ele] }
        selectAndSet(selectedItemDetail);
    }

    function selectComponents(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const selected = formData.getAll("component");
        let selectedItems = ele?.componentList.filter((component) =>
            selected.includes(component._id));

        let selectedItemDetail = { parentId: ele._id, parentType: "item", childType: "component", items: selectedItems }
        selectAndSet(selectedItemDetail);
    }
    function selectDevices(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const selected = formData.getAll("item");
        let selectedItems = ele?.deviceList.filter((component) =>
            selected.includes(component._id));
        let selectedItemDetail = { parentId: ele._id, parentType: "item", childType: "item", items: selectedItems }
        selectAndSet(selectedItemDetail);
    }
    return (
        <div className="flex flex-col">
            <div
                className={`grid grid-cols-9 text-xs   sm:text-sm md:text-base p-2 justify-items-center  ${open ? "bg-base-300" : "bg-base-300 "
                    }`}
            >
                <div className="col-span-1">{index + 1}</div>
                <div className="col-span-3">{ele?.name}</div>

                <div className="col-span-2  ">{ele?.currentState}</div>
                <div className={`col-span-2 text-lg `}>
                    <button
                        onClick={toggleState}
                        className={`${open ? "bg-custom-blue" : "bg-base-100"
                            } duration-100 rounded text-sm font-semibold  px-4 cursor-pointer py-1`}
                    >
                        Detail
                    </button>
                </div>
                <div className="col-span-1">
                    {" "}
                    <button onClick={selectThis} className="text-md py-1 px-2 bg-custom-blue rounded cursor-pointer">
                        <MdMoveUp />
                    </button>
                </div>
            </div>
            <div
                className={`${open ? "block" : "hidden"
                    } bg-base-200  border-s-4 border-custom-blue p-2`}
            >
                <div className="px-2 md:px-5 lg:px-8">
                    <h2 className="text-md font-semibold  py-2">
                        Category: {ele?.category}
                    </h2>
                    <form onSubmit={selectComponents}>
                        <div className="flex gap-2 items-center">
                            <p className=" py-2 ">Components</p>
                            <button className="text-md py-1 px-2 bg-custom-blue rounded cursor-pointer">
                                <MdMoveUp />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {ele?.componentList.map((component, index) => (
                                <div
                                    key={"component-" + index}
                                    className="flex gap-2 items-center "
                                >
                                    <input
                                        type="checkbox"
                                        name="component"
                                        value={component._id}
                                        id={component._id}
                                        className="cursor-pointer h-4 w-4"
                                    />
                                    <label htmlFor={component._id} className="cursor-pointer">
                                        {component?.key} : {component?.value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </form>
                    <form onSubmit={selectDevices}>
                        <div className="flex gap-2 items-center">
                            <p className=" py-2 ">Devices</p>
                            <button
                                type="submit"
                                className="text-md py-1 px-2 bg-custom-blue rounded cursor-pointer"
                            >
                                <MdMoveUp />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {ele?.deviceList.map((device, index) => (
                                <div
                                    key={"component-" + index}
                                    className="flex gap-2 items-center "
                                >
                                    <input
                                        type="checkbox"
                                        name="item"
                                        value={device._id}
                                        id={device._id}
                                        className="cursor-pointer h-4 w-4"
                                    />
                                    <label htmlFor={device._id} className="cursor-pointer">
                                        {device?.name}{" "}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </form>
                    <p className="py-2">Description</p>
                    {ele?.dataList.map((component, index) => (
                        <p key={"data" + index}>
                            {component?.key} : {component?.value}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
