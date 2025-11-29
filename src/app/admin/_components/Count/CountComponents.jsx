import { API_URL } from "@/config";
import React from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { MdPendingActions } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';

const CountComponents = async () => {
    let data;
    try {
        const req = await fetch(`${API_URL}/common/countComponents`)
        const res = await req.json()
        data = res.data
    } catch (error) {
        console.log(error);
    }
    return <div className="flex flex-col gap-2 bg-base-300 pe-16 ps-5 py-3">
        <div className="flex gap-2 font-bold">
            Total Component
            <p>{data?.totalItems}</p>

        </div>
        <div className="flex  flex-col gap-1 mt-2">
            <div className="flex gap-2 items-center">
                <GrStatusGood className="text-green-500 text-lg" />
                <p>Working</p>
                <p>{data?.workingItems || 0}</p>
            </div>
            <div className="flex gap-2 items-center">
                <MdPendingActions className="text-orange-500 text-lg" />
                <p>Under Maintenance</p>
                <p>{data?.under_maintenance || 0}</p>
            </div>
            <div className="flex gap-2 items-center">
                <RxCrossCircled className="text-red-500 text-lg" />

                <p>Broken</p>
                <p>{data?.brokenItems || 0}</p>
            </div>
        </div>
    </div>
}

export default CountComponents;
