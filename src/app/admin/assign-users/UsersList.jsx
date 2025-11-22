import Alert from "@/app/_components/alert/Alert";
import API from "@/app/_components/API";


const UsersList = ({ reFetchExistingFormData, data, setUser, user, selectedLab }) => {

    const isStuff = (ele) => {
        if (!selectedLab._id) return false;

        let list = ele?.labs || [];
        let result = false;
        for (let i = 0; i < list.length; i++)
            if (list[i] == selectedLab._id) result = true;

        return result
    }
    const selectItem = (ele) => {
        if (ele.role == "admin") returnAlert("error", "User  is an Admin");
        else if (isStuff(user)) return Alert("error", "User Already is an staff");
        else {
            setUser(ele)
        }
    };
    const removeItem = async (ele) => {
        try {
            const requestData = { labId: selectedLab._id, staffId: ele._id };
            const req = await fetch(`${API}/admin/removeStaff`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(requestData)
            })
            const res = await req.json();
            if (res.success) {
                reFetchExistingFormData()
                Alert("success", res.message)
            }
            else Alert("error", res.message)
        } catch (error) {
            console.log(error);
            Alert("error", error.message)
        }

    }
    return (
        <div className="flex flex-col gap-2">
            {data?.length == 0 ? (
                <p>No Users data found, try another email  please</p>
            ) : (
                ""
            )}
            {data.map((ele, index) => (
                <div key={"templateList-" + index} className={`${index % 2 == 0 ? "bg-base-300" : "bg-base-100"} rounded grid py-3 md:py-1 px-2 grid-cols-12`}>

                    <div className="font-semibold text-custom-blue col-span-3 md:col-span-4  py-2" >{ele.name}</div>

                    <div className=" py-2 px-2 col-span-6 ">{ele.email_address}</div>
                    {
                        isStuff(ele) ? <button className={`bg-orange-500 rounded btn font-semibold italic py-2 px-2 col-span-6 md:col-span-2`} disabled={ele.role == "admin"} onClick={() => removeItem(ele)}>
                            Remove
                        </button> : <button className={` ${ele._id == user._id ? "pointer-events-none bg-red-600" : ele.role == "staff" ? "bg-green-600" : "bg-custom-blue"} rounded btn font-semibold italic py-2 px-2 col-span-6 md:col-span-2`} disabled={ele.role == "admin"} onClick={() => selectItem(ele)}>
                            {ele.role == "admin" ? "Admin" : ele.role == "staff" ? "Staff" : "Select"}
                        </button>
                    }


                </div>
            ))}
        </div>
    );
};

export default UsersList;


