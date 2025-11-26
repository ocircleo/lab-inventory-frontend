"use client"

import { useState } from "react";
import SingleItem from "./SingleItem";
import Filter from "./Filter";
import { MdPrint } from "react-icons/md";
import PrintPage from "./PrintPage";

const LabItems = ({ data }) => {
    const [items, setItems] = useState(data?.items || [])
    const [print, setPrint] = useState(false)
    const [filter, setFilter] = useState({})
    const clearFilter = () => {
        setItems(data?.items || [])
        setFilter({})
    }
    const filterItems = (filterObj) => {
        setFilter(filterObj)
        let filteredElements = data?.items || [];


        if (filterObj?.category != "all") {
            console.log("category Selected");
            let categoryFilteredElements = filteredElements?.filter(ele => ele?.category == filterObj?.category);
            filteredElements = categoryFilteredElements;
        }
        if (filterObj.currentState != "all") {
            console.log("current State Selected");
            let stateFilteredElements = filteredElements.filter(ele => ele.currentState == filterObj?.currentState)
            filteredElements = stateFilteredElements;
        }
        if (filterObj.subCategory != "all") {
            console.log("meow");
            if (filterObj.filterText.length > 0) {
                let resultArray = [];
                for (let i = 0; i < filteredElements.length; i++) {
                    let majorComponents = filteredElements[i]?.majorComponents || [];
                    // console.log(majorComponents);
                    let temKeyValue = majorComponents.find(ele => ele.key == filterObj?.subCategory)

                    if (temKeyValue && includesText(filterObj.filterText, temKeyValue?.value)) resultArray.push(filteredElements[i])
                }
                filteredElements = resultArray;
            }
        }
        setItems(filteredElements)

    }
    return (<><div className="relative" id="main">
        <Filter items={items} clearFilter={clearFilter} filterItems={filterItems} setPrint={setPrint} />
        <div className='flex flex-col gap-2 mt-4'>
            {items?.map((ele, index) => <SingleItem ele={ele} key={ele._id} index={index} />)}
        </div>

    </div >
        {print && <PrintPage setPrint={setPrint} items={items} data={data} filter={filter} />}
    </>
    );
}

export default LabItems;
function includesText(a = "", b = "") {
    return b.toLowerCase().includes(a.toLowerCase());
}