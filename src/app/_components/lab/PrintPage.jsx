import ThemeButton from "@/app/_components/theme/ThemeButton";
import React, { useEffect, useState } from "react";

const PrintPage = ({ items, setPrint, data, filter }) => {
    const [grid, setGrid] = useState(false);
    const [printing, setPrinting] = useState(false)
    const handlePrint = () => {
        document.getElementById("main").style.display = "none"
        setPrinting(true)
    };
    // Disable scrolling when print view is active
    // Disable scrolling when print view is active
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    useEffect(() => {
        if (printing) {

            window.print()
            document.getElementById("main").style.display = "block"
            setPrinting(false)
        }
    }, [printing])
    return (
        <>
            <div
                className="bg-white text-black fixed h-screen w-screen print-container"
                style={{
                    inset: 0,
                    zIndex: 9999,
                    overflow: "auto",
                    padding: "20px",
                }}
            >
                {/* Controls */}
                <div id="controls" className={`bg-base-300 ${printing ? "hidden" : "block"} p-4 mb-10 flex gap-2`}

                >
                    <button className="btn bg-base-100" onClick={() => setPrint(false)}>
                        Close
                    </button>


                    <button
                        className="btn px-5 bg-custom-blue"
                        onClick={handlePrint}
                        style={{ marginLeft: "10px" }}
                    >
                        Print Page
                    </button>
                    <button className="btn  bg-base-100">

                    <ThemeButton />
                    </button>
                </div>

                {/* Printable content */}
                <div id="print-area">
                    <div className="flex gap-2 flex-wrap py-2 mb-4">
                        <p>Lab Name: <span className="font-semibold">{data?.name}</span></p>
                        <span className="text-custom-blue font-bold px-1">|</span>
                        <p>Category: <span className="font-semibold">{data?.type}</span> </p>
                        <span className="text-custom-blue font-bold px-1">|</span>
                        <p>Dept: <span className="font-semibold">{data?.dept}</span> </p>
                    </div>
                    <div className="flex gap-2 flex-wrap py-2 mb-4">
                        {filter?.category && filter?.category != "all" ? <p>Category: <span className="font-semibold">{filter?.category}</span></p> : ""}
                        {filter?.category && filter?.currentState != "all" ? <p>State: <span className="font-semibold">{filter?.currentState}</span></p> : ""}


                    </div>

                    <table className="table-auto border-collapse border border-gray-400 w-full">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">Count</th>
                                <th className="border border-gray-400 px-4 py-2">Name</th>
                                <th className="border border-gray-400 px-4 py-2">Category</th>
                                <th className="border border-gray-400 px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {item.name}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {item.category}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {item.currentState}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default PrintPage;
