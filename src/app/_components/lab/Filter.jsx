import React, { useEffect, useRef, useState } from 'react';
import { MdPrint } from "react-icons/md";
import { RiResetLeftFill } from "react-icons/ri";
const Filter = ({ items, components, clearFilter, filterItems, setPrint }) => {
    const categoryRef = useRef(null)
    const currenStateRef = useRef(null)
    const [category, setCategory] = useState([])
    const stateArray = ["working", "broken", "under_maintenance"]


    const filterChanged = () => {
        let selectedCategory = categoryRef.current.value;
        let selectedState = currenStateRef.current.value;
        filterItems(selectedCategory, selectedState)
    }

    useEffect(() => {
        const categoryList = []
        items.forEach(ele => {
            if (!categoryList.includes(ele?.category)) categoryList.push(ele?.category)
        })
        components.forEach(ele => {
            if (!categoryList.includes(ele?.category)) categoryList.push(ele?.category)
        })
        setCategory(categoryList)

    }, [])
    return (
        <div className='p-3 bg-base-300 rounded mt-2 flex gap-3 items-center justify-between flex-wrap ' >
            <div className='flex gap-3 items-center flex-wrap '>

                <p>Filters</p>
                <div className='flex gap-3 flex-wrap'>

                    <select name='category' ref={categoryRef} onChange={filterChanged} defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Select Category</option>
                        {category.map((ele, index) => <option key={"category-" + index} value={ele} className='capitalize cursor-pointer'>{ele}</option>)}
                    </select>
                    <select name='currentState' ref={currenStateRef} onChange={filterChanged} defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Not Selected</option>
                        {stateArray.map((ele, index) => <option key={"state-" + index} value={ele} className='capitalize cursor-pointer'>{ele}</option>)}
                    </select>
                    {/* <select name='subCategory' defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Not Selected</option>
                        {selected.map((ele, index) => <option key={"extra-" + index} value={ele._id} className='capitalize cursor-pointer w-56'>{ele.name}</option>)}
                    </select>

                    <input
                        name="filterText"
                        type="text"
                        id='filterText'

                        className="p-2 border-2 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-60 border-gray-500 rounded"
                        placeholder="Extra filter"
                    /> */}
                </div>

            </div>
            <div className='flex gap-3'>
                <button className='btn bg-green-600 px-6 font-semibold' type='submit'>Filter</button>
                <button className='btn bg-base-100 px-6 font-semibold text-2xl' type='reset' onClick={clearFilter}><RiResetLeftFill /></button>
                <button className='btn bg-base-100 px-6 font-semibold text-2xl' type='button' onClick={() => setPrint(true)}><MdPrint /></button>

            </div>
        </div>
    );
}

export default Filter;
