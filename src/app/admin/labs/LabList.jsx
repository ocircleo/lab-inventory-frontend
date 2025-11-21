import Alert from "@/app/_components/alert/Alert";
import API from "@/app/_components/API";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const LabList = ({ data, refresh }) => {
    const deleteItem = async (id) => {
        Swal.fire({
            theme: "dark",
            title: "Do You Want to delete template?",
            text: "Might cause Issues later on!!",
            showCancelButton: true,
            confirmButtonColor: "red",
            confirmButtonText: "Delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteTemplate(id);
                if (result.success) {
                    refresh({ preventDefault: () => { } });
                    Alert("success", "Deleted Template");
                } else Alert("error", result.error);
            }
        });
    };
    return (
        <div className="flex flex-col gap-2">
            {data?.length == 0 ? (
                <p>No Template data found, try other name please</p>
            ) : (
                ""
            )}
            {data.map((ele, index) => (
                <div key={"templateList-" + index} className="bg-base-200 rounded grid py-3 md:py-1 px-6 grid-cols-12">

                    <div className="font-semibold text-custom-blue col-span-6 md:col-span-3 py-2" >{ele.name}</div>
                    <div className="bg-base-300 py-2 px-2 col-span-6 md:col-span-3">Dept. {ele.dept}</div>
                    <div className=" py-2 px-2 col-span-6 md:col-span-3">{ele.type}</div>

                    <Link href={`/admin/labs/${ele._id}`} className="text-custom-blue underline underline-offset-4 font-semibold italic py-2 px-2 col-span-6 md:col-span-3">
                        Edit Lab
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default LabList;

const deleteTemplate = async (id) => {
    try {
        const req = await fetch(`${API}/admin/delete-template`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id }),
            credentials: "include",
        });
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
};
