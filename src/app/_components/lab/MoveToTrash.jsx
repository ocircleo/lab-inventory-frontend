import React from 'react';
import Alert from '../alert/Alert';
import { API_URL } from '@/config';

const MoveToTrash = ({ selectedItems, setMoveLoading, moveLoading }) => {

    const moveTo = async () => {
        try {
            setMoveLoading(true)
            const itemIds = selectedItems.items.map(ele => ele._id);
            const move = { moveTo: { id: "692b0dce7ed4435e8d1276d8", type: "Trash Bin" }, moveFrom: { id: selectedItems.parentId, type: selectedItems.parentType }, item: { id: itemIds, type: selectedItems.childType } }
            const req = await fetch(`${API_URL}/common/move-to-trash`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(move),
                credentials: "include",
            })
            const result = await req.json()

            if (result?.success) {
                Alert("success", "Items moved to trash");
                window.location.reload();
            } else {
                Alert("error", result?.message || "Error moving items");
            }
        } catch (error) {
            console.log(error);
            Alert("error", error.message)
            setMoveLoading(false);
        }

    }
    return (
        <div className="flex flex-col">
            <div className={`flex justify-between items-center text-xs   sm:text-sm md:text-base p-2 justify-items-center  bg-base-300`}>
                <div className='flex gap-2'>
                    <p>{0}</p>
                    <p>{"Trash"}</p>
                </div>


                <div className={`flex gap-3  text-lg `}>

                    <button onClick={moveTo} disabled={moveLoading} className={`${moveLoading ? "bg-base-100 pointer-events-none" : "bg-red-500"}  rounded text-sm font-semibold  px-4 cursor-pointer py-1`}>
                        Trash
                    </button>

                </div>

            </div>
        </div>
    );
}

export default MoveToTrash;
