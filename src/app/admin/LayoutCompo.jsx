"use client";
import React, { useState } from "react";
import nav from "./nav.module.css";
import ActiveLink from "../utls/ActiveLink/ActiveLink";


const dashboardLinks = [
    {
        label: "Admin",
        href: "/admin",
        description: "Manage users, search, change roles"
    },

    {
        label: "labs",
        href: "/admin/labs",
        description: "All Labs",
        children: [
            { label: "Add Lab", href: "/admin/add-lab" },
            { label: "Edit Lab", href: "/admin/edit-lab" }
        ]
    },
    {
        label: "Templates",
        href: "/admin/templates",
        description: "All Labs",
    },
    {
        label: "Add Template",
        href: "/admin/add-template",
    },
    {
        label: "Assign Users",
        href: "/admin/assign-users",
        description: "Manage search Users"
    },
    {
        label: "Logs",
        href: "/admin/logs",
        description: "Manage search Logs"
    },
    {
        label: "Home",
        href: "/",
    },
];

const Sidebar = ({ navState, toggleNav }) => {
    return (
        <aside className={` hidden lg:w-64  bg-gray-800 text-white h-screen overflow-y-hidden   sticky top-0 lg:flex flex-col gap-2`}>
            <p className="text-xl font-bold text-center py-3  border-b-2">Admin Panel</p>
            <div className="flex flex-col gap-2 px-2 pb-12 overflow-y-auto small-scrollbar">
                <LinkUiGenerator links={dashboardLinks} />
            </div>
        </aside>
    );
};

const MobileSidebar = ({ navState, toggleNav }) => {
    return (
        <div className={`lg:hidden top-0 w-full sm:w-64 bg-[#194164] h-full overflow-y-scroll flex flex-col gap-2 px-2 pt-3 pb-12 fixed duration-100 ${!navState ? "-left-full sm:-left-64" : "left-0"} z-20`}>
            <p className="text-xl font-bold text-center py-3  border-b-2">Admin Panel</p>
            <div className="flex flex-col gap-2 px-2 pb-12 overflow-y-auto small-scrollbar">
                <LinkUiGenerator links={dashboardLinks} click={toggleNav} />
            </div>
        </div>
    );
};

export default function DashboardLayout({ children }) {
    const [navState, setNavState] = useState(false);
    const toggleNav = () => setNavState((prev) => !prev);
    return (
        <div className="layout-xx-container flex gap-8 relative">
            <Sidebar navState={navState} toggleNav={toggleNav} />
            <MobileSidebar navState={navState} toggleNav={toggleNav} />
            <div className={`h-full w-full bg-gray-900/35 fixed top-0 left-0 z-0 ${navState ? "block" : "hidden"}`} onClick={toggleNav}></div>
            <div
                onClick={toggleNav}
                className={`h-10 w-10 cursor-pointer rounded flex gap-[3px] bg-[#194164] p-1 items-center justify-center flex-col lg:hidden fixed right-3 top-3 sm:top-6 sm:right-6 active:scale-90 duration-100 z-50`}
            >
                <div className={`h-[6px] bg-white w-full duration-200 rounded-[2px] ${navState ? nav.active : nav.default}`}></div>
                <div className={`h-[6px] bg-white w-full duration-200 rounded-[2px] ${navState ? nav.base : nav.baseDefault}`}></div>
                <div className={`h-[6px] bg-black w-full duration-200 rounded-[2px] ${navState ? nav.active2 : nav.default2}`}></div>
            </div>
            <div className="flex-1   overflow-x-hidden scroll-rock rounded">
                {children}
            </div>
        </div>
    );
}

function LinkUiGenerator({ links, click }) {
    return links.map((linkObject, index) => {
        if (linkObject.children) return <LinkUiDropDown key={linkObject.label + "-lg-drop"} linkObject={linkObject}></LinkUiDropDown>;
        return <ActiveLink click={click} key={linkObject.label + "-lg"} to={`${linkObject.href}`}>{linkObject.label}</ActiveLink>
    })
}
function LinkUiDropDown({ linkObject, click }) {
    const [open, setOpen] = useState(false);
    return <div className={`w-full flex flex-col   ${open ? "" : "border-s-transparent"}`}>
        <div className={`relative w-full flex  ${open ? "bg-gray-700" : ""} mb-2 items-center`}>
            <ActiveLink click={click} keyId={linkObject.label + "-lg-link"} to={linkObject.href}>{linkObject.label}</ActiveLink>
            <button className={`${open ? "px-2 bg-gray-500" : "px-1 bg-gray-700"} pt-1  hover:bg-gray-500  font-bold  text-2xl cursor-pointer self-stretch`} onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>

        </div>
        <div className={`flex flex-col gap-1 border-s-2 ${open ? "block border-s-gray-600" : "hidden border-s-transparent"} ps-2`}>
            {<LinkUiGenerator links={linkObject?.children} />}
        </div>
    </div >
}
/*
1. takes in an argument which is an array of objects
2. if array:
   -> loop over array 
      -> if object has children, render a button to toggle children visibility
       ->  when button is clicked, toggle visibility of children links
       ->  pass it to the LinkUiGenerator
      
     ->else Just call the LinkUiGenerator passing the object
3. if not array: it will render a single link

*/