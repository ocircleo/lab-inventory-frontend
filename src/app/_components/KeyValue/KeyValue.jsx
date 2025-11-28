import React from 'react';

const KeyValue = ({ ele, index, title, deleteElement , updateData}) => {
    return (
        <div
            className={`col-span-2 ${ele.type === "description" ? "lg:col-span-1" : ""
                } flex flex-col gap-2`}
        >
            <p>{title} Field: {index + 1}</p>

            {ele.dataType !== "description" ? (
                <fieldset className="flex flex-col md:flex-row gap-2">
                    <input
                        required
                        type="text"
                        name={`${ele.id}-key`}
                        value={ele.key}
                        onChange={updateData}
                        placeholder="Key"
                        className="p-2 bg-base-300 w-full"
                    />

                    <input
                        datatype={ele.dataType === "number" ? "number" : "text"}
                        name={`${ele.id}-value`}
                        value={ele.value}
                        onChange={updateData}
                        placeholder="Value"
                        className="p-2 bg-base-300 w-full"
                    />
                    <select name={`${ele.id}-type`} className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="component">Component</option>
                        <option value="device">Device</option>
                        <option value="data">Data</option>
                    </select>
                    <button
                        type="button"
                        className="btn bg-red-600"
                        onClick={() => deleteElement(ele.id)}
                    >
                        Delete
                    </button>
                </fieldset>
            ) : (
                <fieldset className="flex flex-col w-full lg:w-1/2 gap-2">
                    <input
                        required
                        name={`${ele.id}-key`}
                        value={ele.key}
                        onChange={updateData}
                        placeholder="Key"
                        className="p-2 bg-base-300"
                    />

                    <textarea
                        name={`${ele.id}-value`}
                        value={ele.value}
                        onChange={updateData}
                        rows={4}
                        placeholder="Description"
                        className="p-2 bg-base-300"
                    />
                    <select name={`${ele.id}-type`} className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="component">Component</option>
                        <option value="device">Device</option>
                        <option value="data">Data</option>
                    </select>
                    <button
                        type="button"
                        className="btn bg-red-600"
                        onClick={() => deleteElement(ele.id)}
                    >
                        Delete
                    </button>
                </fieldset>
            )}
        </div>
    );
}

export default KeyValue;
