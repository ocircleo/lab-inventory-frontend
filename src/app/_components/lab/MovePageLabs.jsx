import React, { useState } from 'react';

const MovePageLabs = ({ lab, index, moveLoading, moveTo }) => {
    const [open, setOpen] = useState(false);
    const toggleState = () => setOpen(!open);
    return (
        <div className="flex flex-col">
            <div className={`flex justify-between items-center text-xs   sm:text-sm md:text-base p-2 justify-items-center  ${index % 2 ? "bg-base-200" : "bg-base-300 "}`}>
                <div className='flex gap-2'>
                    <p>{index + 1}</p>
                    <p>{lab?.name}</p>
                </div>


                <div className={`flex gap-3  text-lg `}>
                    <button
                        onClick={toggleState}
                        className={`${open ? "bg-custom-blue" : "bg-base-100"
                            } duration-100 rounded text-sm font-semibold  px-4 cursor-pointer py-1`}
                    >
                        Detail
                    </button>
                    <button onClick={() => moveTo(lab._id, "lab")} disabled={moveLoading} className={`${moveLoading ? "bg-base-100 pointer-events-none" : "bg-green-500"}  rounded text-sm font-semibold  px-4 cursor-pointer py-1`}>
                        Insert
                    </button>

                </div>

            </div>
            <div className={`${open ? "block" : "hidden"} bg-base-200  border-s-4 border-custom-blue p-2 flex`}>

                {lab.items.map(ele => <div key={ele._id} className=' bg-base-300 flex flex-col gap-4 p-4'>

                    <p>{ele.name}</p>
                    <button onClick={() => moveTo(ele._id, "item")} disabled={moveLoading} className={`${moveLoading ? "bg-base-100 pointer-events-none" : "bg-green-500"}  rounded text-sm font-semibold  px-4 cursor-pointer py-1`}>
                        Insert Hare
                    </button>
                </div>)}

            </div>
        </div>
    );
}

export default MovePageLabs;
