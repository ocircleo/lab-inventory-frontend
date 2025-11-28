import API from '@/app/_components/API';
import React from 'react';

const Item = async ({ type = null, id = null }) => {
    const apiRoutes = {
        user: "/common/user/" + id,
        lab: "/common/singleLab/" + id,
        item: "/common/items/" + id,
        component: "/common/components/" + id
    }
    try {
        const req = await fetch(API + apiRoutes[type], {
            method: "GET",
            credentials: "include",
        })
        const result = await req.json();
        const data = result?.data || {};
        console.log("type: ", type, data);
        if (type == "user") return (<div className='bg-base-300 p-3'>User: {data?.name}<span className='px-2 text-custom-blue'>|</span>{data?.role}</div>)
        if (type == "lab") return (<div className='bg-base-300 p-3'>Lab: {data?.name} <span className='px-2 text-custom-blue'>|</span>{data?.dept} </div>)
        if (type == "item") return (<div className='bg-base-300 p-3'>Item: {data?.name} <span className='px-2 text-custom-blue'>|</span>{data?.currentState}</div>)
        if (type == "component") return (<div className='bg-base-300 p-3'>Component: {data?.name} <span className='px-1 text-custom-blue'>-</span>{data?.value} <span className='px-2 text-custom-blue'>|</span> {data?.currentState}</div>)

    } catch (error) {
        return (
            <div>
                Failed to load data
            </div>
        );
    }
}

export default Item;
