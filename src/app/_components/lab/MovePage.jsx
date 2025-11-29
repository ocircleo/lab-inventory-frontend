import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import MovePageLabs from "./MovePageLabs";
import Alert from "../alert/Alert";
import { API_URL } from "@/config";
import MoveToTrash from "./MoveToTrash";

const MovePage = ({ selectedItems, closeMovePage }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [moveLoading, setMoveLoading] = useState(false);
    const formRef = useRef(null);

    let timeOut;
    const searchLabs = (e) => {
        e.preventDefault();
        let form = formRef.current;
        let inputValue = form.temName.value;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fetchLabsData(inputValue);
        }, 400);
    };
    const fetchLabsData = async (text) => {
        if (text.length == 0) return setData([]);
        try {
            setLoading(true);
            const req = await fetch(`${API_URL}/common/searchLabToInsert?lab=${text}`);
            const result = await req.json();
            setLoading(false);
            setData(Array.isArray(result?.data) ? result?.data : []);
        } catch (error) {
            console.log(error);
        }
    };
    const moveTo = async (id, type) => {
        try {
            setMoveLoading(true)
            const itemIds = selectedItems.items.map(ele => ele._id);
            const move = { moveTo: { id, type }, moveFrom: { id: selectedItems.parentId, type: selectedItems.parentType }, item: { id: itemIds, type: selectedItems.childType } }
            const req = await fetch(`${API_URL}/common/move-items`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(move),
                credentials: "include",
            })
            const result = await req.json()

            if (result?.success) {
                Alert("success", "Items moved successfully");
                setMoveLoading(false);
                window.location.reload();
            } else {
                Alert("error", result?.message || "Error moving items");
                setMoveLoading(false);
            }
        } catch (error) {
            console.log(error);
            Alert("error", error.message)
        }

    }
    useEffect(() => {
        fetchLabsData("@all");
    }, []);
    return (
        <div className='fixed h-full w-screen bg-base-100 top-0 left-0 p-2 '>
            <button className='btn bg-base-300  text-2xl font-bold' onClick={closeMovePage}><IoCloseSharp /> </button>
            <div className="flex flex-col gap-2">

                <p>Selected {selectedItems.childType}s | Parent Id:{selectedItems.parentId}</p>
                <div className="flex gap-2">
                    <ol list-style-type="decimal" className="list-inside list-decimal">
                        {selectedItems.items.map(ele => <li key={ele._id}>{ele.name}</li>)}
                    </ol>
                </div>
            </div>
            <div className="w-full md:w-5/6 lg:4/5 mx-auto">
                <h1 className="text-2xl font-bold mb-6">Search Labs</h1>
                <form ref={formRef} onSubmit={searchLabs}>
                    <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
                        <label htmlFor="temName" className="p-1">
                            Lab Name
                        </label>
                        <input
                            onChange={searchLabs}
                            name="temName"
                            type="text"
                            id="temName"
                            defaultValue={"@all"}
                            required
                            className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                            placeholder="Template Name"
                        />
                    </fieldset>
                    <p className="py-1">{loading ? "Loading....." : ""}</p>
                </form>
                <div className="flex flex-col gap-2">
                    <MoveToTrash selectedItems={selectedItems} setMoveLoading={setMoveLoading} moveLoading={moveLoading} />
                    {data.map((lab, index) => <MovePageLabs key={lab._id} lab={lab} index={index} moveLoading={moveLoading} moveTo={moveTo} />)}
                </div>


            </div>
        </div>
    );
}

export default MovePage;
