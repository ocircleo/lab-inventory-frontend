"use client";
import React, { useState } from "react";
import { MdMoveUp } from "react-icons/md";
import UpdateFrom from "./UpdateFrom";

const SingleItemComponents = ({ ele, index, selectAndSet }) => {
    console.log(ele);
    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);


    function selectThis() {
        let selectedItemDetail = { parentId: undefined, parentType: "lab", childType: "component", items: [ele] }
        selectAndSet(selectedItemDetail);
    }
    return (
        <div className="flex flex-col">
            <div className={`grid grid-cols-9 text-xs   sm:text-sm md:text-base p-2 justify-items-center  ${open ? "bg-base-300" : "bg-base-300 "}`} >
                <div className="col-span-1">{index + 1}</div>
                <div className="col-span-3">{ele?.key}</div>
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
                    <div >
                        {ele?.key} : {ele?.value}

                    </div>

                </div>
                <div>
                    <UpdateFrom type={"component"} id={ele._id} />
                </div>
            </div>
        </div>
    );
};

export default SingleItemComponents;
