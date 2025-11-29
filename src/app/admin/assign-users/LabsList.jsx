const LabList = ({ data, setLab, selectedLab }) => {
    const selectItem = async (ele) => {
        try {
            // const req = await fetch(`${API_URL}/common/labs/${ele._id}`, {
            //     method: "GET",
            //     credentials: "include",
            // });
            // const res = await req.json();
            // data = await res.data;
            // setLab(data)
            setLab(ele)
        } catch (error) {
            setLab(ele)
            console.log(error);
        }
    };
    return (
        <div className="flex flex-col gap-2">
            {data?.length == 0 ? (
                <p>No Lab data found, try other name please</p>
            ) : (
                ""
            )}
            {data.map((ele, index) => (
                <div key={"templateList-" + index} className={`${index % 2 == 0 ? "bg-base-300" : "bg-base-100"} rounded grid py-3 md:py-1 px-2 grid-cols-12`}>

                    <div className="font-semibold text-custom-blue col-span-6  py-2" >{ele.name}</div>

                    <div className=" py-2 px-2 col-span-6 md:col-span-4">{ele.type}</div>

                    <button className={` ${ele._id == selectedLab._id ? "pointer-events-none bg-green-700" : "bg-custom-blue"} rounded btn font-semibold italic py-2 px-2 col-span-6 md:col-span-2`} onClick={() => selectItem(ele)}>
                        {ele._id == selectedLab._id ? "Selected" : "Select"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default LabList;


