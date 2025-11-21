import React from 'react';

const LabTitle = ({ data }) => {
    return (
        <div className="flex gap-4 bg-base-300 py-2 px-3 rounded">
            <p>
                Lab Name:{" "}
                <span className="text-custom-blue font-semibold">{data?.name}</span>
            </p>
            <p>
                Dept: <span className=" font-bold">{data?.dept}</span>
            </p>
            <p>
                Type: <span className="font-bold">{data?.type}</span>
            </p>
        </div>
    );
}

export default LabTitle;
