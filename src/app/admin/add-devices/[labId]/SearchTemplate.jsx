import { API_URL } from "@/config";
import React, { useEffect, useRef, useState } from 'react';

const SearchTemplate = ({ setPrevData, setTemplate }) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)
    const boxRef = useRef(null)
    let timeOut;
    const searchTemplate = () => {
        let inputElement = inputRef.current;
        let inputValue = inputElement.value;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fetchTemplateData(inputValue);
        }, 400);
    };
    const fetchTemplateData = async (text) => {
        if (text.length == 0) {
            setShow(false)
            return setData([])
        };
        try {
            setLoading(true);

            const req = await fetch(`${API_URL}/common/searchTemplate?template=${text}`);
            const result = await req.json();
            
            setLoading(false);
            setData(result?.data);
            if (result?.data?.length > 0) setShow(true)
        } catch (error) {
            console.log(error);
        }
    };
    const selectItem = (ele) => {
        let inputElement = inputRef.current;
        inputElement.value = ele.category;

        setTemplate(ele)
        setPrevData(ele?.dataModel || [])
        setShow(false)
    }

    return (
        <div>
            <fieldset className="w-full md:w-96 flex flex-col relative">
                <label htmlFor="temName" className='p-1'>Search Template</label>
                <input name="temName"
                    type="text"
                    id='temName'
                    required
                    ref={inputRef}
                    onChange={searchTemplate}
                    className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                    placeholder="Name of Template"
                />
                <p className={`text-xs ${loading ? "visible" : "invisible"}`}>Loading...</p>
                {show && <div ref={boxRef} className='flex flex-col gap-2 p-2 bg-base-300 absolute top-[5.5rem] w-full '>

                    {data.map((ele, index) => <button key={"select-" + index} onClick={() => selectItem(ele)} className='bg-base-100 py-1 capitalize hover:bg-base-200 btn'>{ele?.category}</button>)}
                </div>}

            </fieldset>
        </div>
    );
}

export default SearchTemplate;
