import API from '@/app/_components/API';
import React from 'react';

const CountUsers = async ({ type = "all" }) => {
    try {
        const req = await fetch(`${API}/common/countUsers?role=${type}`)
        const res = await req.json()
        if (res?.data?.total) return <p>{res?.data?.total}</p>
        return <p>0</p>

    } catch (error) {
        console.log(error);
        return <p>0</p>

    }
}

export default CountUsers;
