"use client";
import React, { useState } from 'react';
import SearchTemplate from './SearchTemplate';

const AddDeviceForm = ({ data }) => {
    const [template, setTemplate] = useState({})
    return (
        <div>
            <SearchTemplate setTemplate={setTemplate}/>
            Add Devices form
        </div>
    );
}

export default AddDeviceForm;
