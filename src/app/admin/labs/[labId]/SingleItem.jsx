import React from 'react';

const SingleItem = ({ ele, index }) => {
    return (
        <div key={ele._id} className='col-span-6 md:col-span-3 lg:col-span-2 bg-base-300 p-4 animate-scale-sm ' >
            <p className='font-semibold'>{index + 1}. {ele?.name}</p>
            <p>State:  <span className={`font-semibold ${ele?.currentState == "working" ? "text-green-500" : "text-orange-500"}`}>{ele?.currentState}</span></p>
            <div className='my-2 flex gap-2'>

                <select name="select" id='updateState' className='border-2 border-gray-500 rounded px-1' >
                    <option value="working">Working</option>
                    <option value="broken">Broken</option>
                    <option value="under_maintenance">Maintenance</option>
                    <option value="repaired">Repaired</option>
                    <option value="replaced">Replaced</option>

                </select>
                <button className='bg-custom-blue px-2 text-white rounded py-1 '>Update</button>

            </div>
            <div className='flex gap-2'>
                <button className='btn bg-red-500  mt-3 text-white'>Delete</button>
                <button className=' px-3 underline underline-offset-4 text-custom-blue italic font-semibold   mt-3 '>Move Item</button>

            </div>
        </div>
    );
}

export default SingleItem;
