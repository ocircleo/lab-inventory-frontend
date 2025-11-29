import React, { useState } from 'react';
import Alert from '../alert/Alert';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/config';

const UpdateFrom = ({ type, id }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const submitFunction = async (e) => {
        e.preventDefault()
        let form = e.target;
        let currentState = form.currentState.value;
        let data = {
            status: currentState, itemId: id, itemType: type
        }
        setLoading(true)
        try {
            const req = await fetch(`${API_URL}/common/updateStateLog`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
                credentials: "include"
            })
            const result = await req.json()

            if (result.success) {
                Alert("success", result.message)
                window.location.reload();
            }
            else Alert("error", result.message)
        } catch (error) {
            console.log(error);
            Alert("error", error.message)
        }
        setLoading(false)
    }
    return (
        <form onSubmit={submitFunction} className='flex flex-col  mx-5  gap-4 my-3 bg-base-100 p-3'>
            <p className='capitalize'>Mark {type}</p>
            <select name='currentState'  defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                <option value="working">Working</option>
                <option value="broken">Broken</option>
                <option value="under_maintenance">Under Maintenance</option>
            </select>
            <button disabled={loading} type='submit' className='bg-custom-blue inline-block self-start px-3 py-1 rounded btn'>Update</button>
        </form>
    );
}

export default UpdateFrom;
