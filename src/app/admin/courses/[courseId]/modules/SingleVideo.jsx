"use client";
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
const SingleVideo = ({ data = {} }) => {

    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);
    const submitHandler = async (e) => {

    }
    return (
        <div className='flex flex-col'>
            <div className={`flex items-center justify-between text-xs rounded  sm:text-sm md:text-base p-2 justify-items-center hover:bg-base-200 ${open ? "bg-base-200" : "bg-base-100"}`}>
                <div className="col-span-3">
                    {data?.name || 'title'}
                </div>
                <div className={`col-span-1 text-lg `}><button onClick={toggleState} className={`${open ? "rotate-180" : "rotate-0"} duration-100 scale-150`}><RiArrowDropDownLine /></button></div>

            </div>
            <div className={`${open ? "block" : "hidden"} bg-base-200  border-s-4 border-red-500 p-2`}>
                <div className='bg-base-200 px-2 md:px-5 lg:px-8'>

                    <form onSubmit={submitHandler}
                        className="grid grid-cols-2 gap-4 w-full   mt-8"
                    >
                        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                            <label htmlFor="title" className='p-1'>video Title</label>
                            <input
                                name="title"
                                type="text"
                                id='title'
                                required
                                defaultValue={data?.title}
                                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                                placeholder="Course Title"
                            />
                        </fieldset>

                        <fieldset className="col-span-2  flex flex-col gap-2">
                            <label htmlFor="description" className='p-1'>Description</label>
                            <textarea

                                name="description"
                                id='description'
                                required
                                defaultValue={data?.description}
                                rows={4}
                                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                                placeholder="Describe the Video..."
                            />
                        </fieldset>
                        <button
                            id="submitButton"
                            className="btn   bg-custom-blue hover:bg-green-500 font-semibold text-white rounded-lg"
                        >
                            Update video
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SingleVideo;