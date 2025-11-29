import Alert from '@/app/_components/alert/Alert';
import { API_URL } from "@/config";
import React from 'react';

const SingleUser = ({ index, data, searchLabs }) => {
    const removeFromStaff = async () => {
        try {
            if (!data?._id) return Alert("error", "No User selected");

            const requestData = { staffId: data._id };
            const req = await fetch(`${API_URL}/admin/deleteStaff`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(requestData)
            })
            const res = await req.json();
           
            searchLabs({ preventDefault: () => { } });
            if (res.success) {
                Alert("success", "User removed from Staff");
            } else {
                Alert("error", res.message || "Some Error happened");
            }
        } catch (error) {
            console.log(error);
            Alert("success", "Some Error Happened while requesting")
        }
    }
    const addToStaff = async () => {
        try {
            if (!data?._id) return Alert("error", "No User selected");

            const requestData = { staffId: data._id };
            const req = await fetch(`${API_URL}/admin/makeStaff`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(requestData)
            })
            const res = await req.json();
            if (res.success) {
                Alert("success", "User is now a Staff");
                searchLabs(new Event("submit"));
            }
        } catch (error) {
            console.log(error);
            Alert("success", "Some Error Happened while requesting")
        }
    }
    return (
        <div className={`grid grid-cols-12 gap-2 text-xs sm:text-sm md:text-base p-2 justify-items-center ${index % 2 == 0 ? "bg-base-200" : "bg-base-300"} ${data.role == "admin" ? "font-semibold border-blue-500 border-s-4" : ""}`}>
            <div className="col-span-1  w-full">
                {index + 1}
            </div>
            <div className="col-span-2 capitalize w-full">
                {data.name}
            </div>
            <div className="col-span-2 w-full">
                {data?.role}  </div>
            <div className="col-span-5 overflow-hidden bg-base-100 ps-3  w-full">{data.email_address}</div>
            <div className="col-span-2  w-full">
                {data?.role == "admin" ? <button className='px-4 w-full py-1 bg-base-200 border rounded cursor-pointer pointer-events-none' disabled>
                    Admin
                </button> : data?.role == "staff" ? <button onClick={removeFromStaff} className='px-4 w-full py-1 bg-custom-blue  rounded cursor-pointer' >
                    Remove Staff
                </button> : <button onClick={addToStaff} className='px-4 py-1 bg-green-600 w-full  rounded cursor-pointer' >
                    Make Staff
                </button>}
            </div>
        </div>
    );
}

export default SingleUser;
