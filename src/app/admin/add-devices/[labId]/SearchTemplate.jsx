import API from '@/app/_components/API';
import React, { useEffect, useRef, useState } from 'react';

const SearchTemplate = ({ setTemplate }) => {
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
        if (text.length == 0) return setData([]);
        try {
            setLoading(true);

            const req = await fetch(`${API}/common/searchTemplate?template=${text}`);
            const result = await req.json();
            console.log(result?.data);
            setLoading(false);
            setData(result?.data);
        } catch (error) {
            console.log(error);
        }
    };
    const selectItem = (ele) => {
        setTemplate(ele)
        setShow(false)
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div>
            <fieldset className="w-full md:w-96 flex flex-col gap-2">
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
                {show && <div ref={boxRef} className='flex flex-col gap-2 p-2 bg-base-300'>
                    {data.map((ele, index) => <button key={"select-" + index} onClick={() => selectItem(ele)}>{ele?.category}</button>)}
                </div>}

            </fieldset>
        </div>
    );
}

export default SearchTemplate;
