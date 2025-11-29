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

        setSelectedItems({ parentId: selectionData.parentId == undefined ? data._id : selectionData.parentId, parentType: selectionData.parentType, items: selectionData.items, childType: selectionData.childType })

    }
    const closeMovePage = () => {
        setSelectedItems({ parentId: "", parentType: "", childType: "", items: [] })
    }
    const clearFilter = () => {
        setItems(data?.items || [])
        setComponents(data?.components || [])
        setFilter({})
    }
    const filterItems = (selectedCategory, selectedCurrentState) => {
        let items = data?.items || []
        let components = data?.components || []
        let selectedItems = []
        let selectedComponents = []
        if (selectedCategory == "all") {
            selectedItems = items;
            selectedComponents = components;
        } else {
            selectedItems = items.filter(ele => ele.category == selectedCategory)
            selectedComponents = components.filter(ele => ele.category == selectedCategory)
        }
        if (selectedCurrentState != "all") {
            selectedItems = selectedItems.filter(ele => ele.currentState == selectedCurrentState)
            selectedComponents = selectedComponents.filter(ele => ele.currentState == selectedCurrentState)
        }
        setItems(selectedItems)
        setComponents(selectedComponents)
    }
    return (<><div className="relative" id="main">
        <Filter items={items} components={components} clearFilter={clearFilter} filterItems={filterItems} setPrint={setPrint} />

        <div className='flex flex-col gap-2 mt-4'>
            {items.length > 0 ? <p className="py-1 font-semibold">Device List</p> : ""}
            {items?.map((ele, index) => <SingleItem ele={ele} key={ele._id} index={index} selectAndSet={selectAndSet} />)}
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            {components.length > 0 ? <p className="py-1 font-semibold">Components List</p> : ""}

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