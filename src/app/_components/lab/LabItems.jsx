"use client"

import { useState } from "react";
import SingleItem from "./SingleItem";
import Filter from "./Filter";
import PrintPage from "./PrintPage";
import MovePage from "./MovePage";
import SingleItemComponents from "./SingleItemComponents";

const LabItems = ({ data }) => {
    const [items, setItems] = useState(data?.items || [])
    const [components, setComponents] = useState(data?.components || [])
    const [print, setPrint] = useState(false)
    const [filter, setFilter] = useState({})
    const [selectedItems, setSelectedItems] = useState({ parentId: "", parentType: "", childType: "", items: [] })
    const selectAndSet = (selectionData) => {
        console.log(selectionData);
        console.log("Lab id: ", data._id);

        setSelectedItems({ parentId: selectionData.parentId == undefined ? data._id : selectionData.parentId, parentType: selectionData.parentType, items: selectionData.items, childType: selectionData.childType })

    }
    const closeMovePage = () => {
        setSelectedItems({ parentId: "", parentType: "", childType: "", items: [] })
    }
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
            {items?.map((ele, index) => <SingleItem ele={ele} key={ele._id} index={index} selectAndSet={selectAndSet} />)}
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            {components?.map((ele, index) => <SingleItemComponents ele={ele} key={ele._id} index={index} selectAndSet={selectAndSet} />)}
        </div>



    </div >
        {print && <PrintPage setPrint={setPrint} items={items} data={data} filter={filter} />}
        {selectedItems.items.length > 0 && <MovePage selectedItems={selectedItems} closeMovePage={closeMovePage} />}
    </>
    );
}

export default LabItems;
function includesText(a = "", b = "") {
    return b.toLowerCase().includes(a.toLowerCase());
}