import React, { useEffect, useRef, useState } from 'react';
import { MdPrint } from "react-icons/md";
import { RiResetLeftFill } from "react-icons/ri";
const Filter = ({ items, clearFilter, filterItems, setPrint }) => {
    const categoryRef = useRef(null)
    const [selected, setSelected] = useState([])
    const [category, setCategory] = useState([])
    const stateArray = ["working", "broken", "under_maintenance"]

    const submitForm = (e) => {
        e.preventDefault()
        let form = e.target;
        let category, subCategory, currentState, filterText;
        category = form.category.value;
        subCategory = form.subCategory.value;
        currentState = form.currentState.value;
        filterText = form.filterText.value;
        filterItems({ category, subCategory, currentState, filterText })
    }
    const categoryChanged = (e) => {
        const selectedCategory = e.target.value;
        const defaultSelected = items?.filter(ele => ele?.category == selectedCategory);
        const extraFilter = []
        for (let i = 0; i < defaultSelected.length; i++) {
            let majorComponents = defaultSelected[i]?.majorComponents || [];
            for (let i = 0; i < majorComponents.length; i++) {
                if (extraFilter.includes(majorComponents[i]?.key)) continue;
                extraFilter.push(majorComponents[i]?.key);
            }
        }
        setSelected(extraFilter)
    }
    useEffect(() => {
        const categoryArray = []
        const extraFilter = []
        for (let i = 0; i < items.length; i++) {
            if (!items[i]?.category) {
                categoryArray.push("unknown")
                continue;
            }
            if (categoryArray.includes(items[i]?.category)) continue;
            categoryArray.push(items[i]?.category);
        }

        const defaultSelected = items?.filter(ele => ele?.category == categoryArray[0]);

        for (let i = 0; i < defaultSelected.length; i++) {
            let majorComponents = defaultSelected[i]?.majorComponents || [];
            for (let i = 0; i < majorComponents.length; i++) {
                if (extraFilter.includes(majorComponents[i]?.key)) continue;
                extraFilter.push(majorComponents[i]?.key);
            }
        }
        setCategory(categoryArray)
        setSelected(extraFilter)
    }, [])
    return (
        <form onSubmit={submitForm} className='p-3 bg-base-300 rounded mt-2 flex gap-3 items-center justify-between flex-wrap ' >
            <div className='flex gap-3 items-center flex-wrap '>

                <p>Filters</p>
                <div className='flex gap-3 flex-wrap'>

                    <select name='category' ref={categoryRef} onChange={categoryChanged} defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Select Category</option>
                        {category.map((ele, index) => <option key={"category-" + index} value={ele} className='capitalize cursor-pointer'>{ele}</option>)}
                    </select>
                    <select name='currentState' defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Not Selected</option>
                        {stateArray.map((ele, index) => <option key={"state-" + index} value={ele} className='capitalize cursor-pointer'>{ele}</option>)}
                    </select>
                    <select name='subCategory' defaultValue="all" className="select select-neutral w-36 outline-0 focus:outline-0">
                        <option value="all">Not Selected</option>
                        {selected.map((ele, index) => <option key={"extra-" + ele} value={ele} className='capitalize cursor-pointer w-56'>{ele}</option>)}
                    </select>

                    <input
                        name="filterText"
                        type="text"
                        id='filterText'

                        className="p-2 border-2 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-60 border-gray-500 rounded"
                        placeholder="Extra filter"
                    />
                </div>

            </div>
            <div className='flex gap-3'>
                <button className='btn bg-green-600 px-6 font-semibold' type='submit'>Filter</button>
                <button className='btn bg-base-100 px-6 font-semibold text-2xl' type='reset' onClick={clearFilter}><RiResetLeftFill /></button>
                <button className='btn bg-base-100 px-6 font-semibold text-2xl' type='button' onClick={() => setPrint(true)}><MdPrint /></button>

            </div>
        </form>
    );
}

export default Filter;
