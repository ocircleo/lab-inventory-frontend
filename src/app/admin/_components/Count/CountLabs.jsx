import { API_URL} from "@/config";
import React from 'react';

const CountLabs = async () => {
    try {
        const req = await fetch(`${API_URL}/common/countLabs`)
        const res = await req.json()
        if (res?.data?.total) return <p>{res?.data?.total}</p>
        return <p>0</p>

    } catch (error) {
        console.log(error);
        return <p>0</p>

    }
}

export default CountLabs;
