"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SingleItem = ({ ele, index }) => {
    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);
    return (
        <div className='flex flex-col'>
            <div className={`grid grid-cols-8 text-xs   sm:text-sm md:text-base p-2 justify-items-center  ${open ? "bg-base-300" : "bg-base-300 "}`}>
                <div className="col-span-1">
                    {index + 1}
                </div>
                <div className="col-span-3">

                    {ele?.name}

                </div>

                <div className="col-span-2  ">
                    {ele?.currentState}</div>
                <div className={`col-span-2 text-lg `}><button onClick={toggleState} className={`${open ? "bg-custom-blue" : "bg-base-100"} duration-100 rounded text-sm font-semibold  px-4 cursor-pointer py-1`}>Detail</button></div>

            </div>
            <div className={`${open ? "block" : "hidden"} bg-base-200  border-s-4 border-custom-blue p-2`}>
                <div className='px-2 md:px-5 lg:px-8'>
                    {/* Item Detaill */}
                    <h2 className="text-lg font-semibold  py-2">
                        item Detail  
                    </h2>

                    {/* <OrderUpdateForm data={data} refreshData={refreshData}></OrderUpdateForm> */}
                </div>
            </div>
        </div>
    );
}

export default SingleItem;

