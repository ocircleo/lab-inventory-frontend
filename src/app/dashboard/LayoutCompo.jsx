"use client";
import React, { useState } from "react";
import nav from "./nav.module.css";
import ActiveLink from "@/app/utls/ActiveLink/ActiveLink";

const dashboardLinks = [
    {
        label: "Profile",
        href: "/dashboard/profile",
    },
    {
        label: "Edit Profile",
        href: "/dashboard/edit-profile",
    },
    {
        label: "Messages",
        href: "/dashboard/messages",
        children: [
            { label: "Send Message", href: "/dashboard/messages/send", children: [{ label: "History", href: "/dashboard/message/send/history" }, { label: "History2", href: "/dashboard/message/send/history" }] },
            { label: "Reply", href: "/dashboard/messages/reply" },
        ],
    },
    {
        label: "Notifications Center",
        href: "/dashboard/notifications",
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        children: [
            { label: "Password", href: "/dashboard/settings/password" },
            { label: "2FA", href: "/dashboard/settings/2fa" },
            { label: "Language", href: "/dashboard/settings/language" },
            { label: "Time Zone", href: "/dashboard/settings/timezone" },
        ],
    },
];

const Sidebar = ({ navState, toggleNav }) => {
    return (
        <aside className={` hidden lg:w-64  bg-gray-800 text-white h-screen overflow-y-hidden   sticky top-0 lg:flex flex-col gap-2`}>
            <p className="text-xl font-bold text-center py-3  border-b-2">User Dashboard</p>
            <div className="flex flex-col gap-2 px-2 pb-12 overflow-y-auto small-scrollbar">
                <LinkUiGenerator links={dashboardLinks} />
            </div>
        </aside>
    );
};

const MobileSidebar = ({ navState, toggleNav }) => {
    const [open, setOpen] = useState({});
    const handleToggle = (label) => {
        setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
    };
    return (
        <div className={`lg:hidden top-0 w-full sm:w-64 bg-[#194164] h-full overflow-y-scroll flex flex-col gap-2 px-2 pt-3 pb-12 fixed duration-100 ${!navState ? "-left-full sm:-left-64" : "left-0"} z-20`}>
            <p className="text-xl font-bold text-center py-3 text-black border-b-2">User Dashboard</p>
            {dashboardLinks.map((link, idx) => (
                <div key={link.label + idx}>
                    <div className="flex items-center justify-between">
                        <ActiveLink to={link.href} click={toggleNav}>
                            <span className="w-full block px-4 py-2 bg-[#194164] text-white hover:bg-[#255080] rounded transition-colors font-semibold" style={{ minWidth: 0 }}>{link.label}</span>
                        </ActiveLink>
                        {link.children && (
                            <button onClick={() => handleToggle(link.label)} className="ml-2 text-xs text-white bg-[#043865] px-2 py-1 rounded">{open[link.label] ? "-" : "+"}</button>
                        )}
                    </div>
                    {link.children && open[link.label] && (
                        <div className="pl-4 flex flex-col gap-1">
                            {link.children.map((child, cidx) => (
                                <ActiveLink key={child.label + cidx} to={child.href} click={toggleNav}>
                                    <span className="w-full block px-4 py-2 bg-[#255080] text-white hover:bg-[#194164] rounded transition-colors font-normal" style={{ minWidth: 0 }}>{child.label}</span>
                                </ActiveLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
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

function LinkUiGenerator({ links }) {

    let isArray = Array.isArray(links);
    if (isArray) return links.map((linkObject, index) => {
        if (linkObject?.children && linkObject.children.length > 0) return <LinkUiDropDown linkObject={linkObject}></LinkUiDropDown>;
        return <LinkUiGenerator key={linkObject.label + index} links={linkObject} />
    })
    return <ActiveLink to={`${links.href}`}>{links.label}</ActiveLink>

}
function LinkUiDropDown({ linkObject }) {
    const [open, setOpen] = useState(false);
    return <div className={`w-full flex flex-col   ${open ? "" : "border-s-transparent"}`} >
        <div className={`relative w-full ${open ? "bg-gray-700" : ""} mb-2`}>
            <ActiveLink to={linkObject.href}>{linkObject.label}</ActiveLink>
            <button className="px-1 font-bold absolute right-0 text-2xl cursor-pointer" onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
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