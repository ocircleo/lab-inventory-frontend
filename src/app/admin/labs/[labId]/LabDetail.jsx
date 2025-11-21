import Link from 'next/link';
import React from 'react';

const LabDetail = ({ data }) => {
    return (
        <div className='mt-12 border-t-2 border-dashed pt-6'>
            <p className='inline-block text-lg border-b-2 pb-1 pe-4'>Detail View of <span className='font-semibold text-custom-blue'>{data?.name}</span> </p>
            <div className="flex justify-between gap-4 bg-base-300 py-2 px-3 rounded mt-4">
                <div className='flex items-center gap-4'>
                    <p className=''>No of Devices: {data?.items?.length}</p>
                    <span className='text-custom-blue'>|</span>
                    <p>Active: {data?.items?.length}</p>
                    <span className='text-custom-blue'>|</span>
                    <p>Staffs: {data?.staffs?.length}</p>
                </div>
                <div className='flex gap-4'>
                    <Link href={"/ss"} className='bg-custom-blue hover:bg-blue-800 px-3 py-1 rounded'>Add Devices</Link>
                    <Link href={"/ss"} className='bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded'>Manage Staffs</Link>
                </div>
            </div>

        </div>
    );
}

export default LabDetail;
