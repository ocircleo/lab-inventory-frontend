"use client";
import API from '@/app/_components/API';
import fetchWithTimeOut from '@/app/_components/fetchwithtimeout/fetchWithTimeOut';
import { useRouter } from 'next/navigation';
import Alert from '../alert/Alert';
/**
 * 
 * @param preData {type:"string"[add,any],data:{_id,...}} 
 * @returns 
 */
const LabForm = ({ preData }) => {
    let data = preData?.data;
    const router = useRouter();
    let loading = false;

    const submitHandler = async (e) => {
        e.preventDefault();
        if (loading) return;

        const form = e.target;
        let name, type, dept, submitButton;

        name = form.labName.value;
        type = form.labType.value;
        dept = form.dept.value;
        const formData = { name, type, dept }

        submitButton = form.submitButton
        submitButton.disabled = true;
        loading = true;


        if (preData?.type === "add") {
            submitButton.innerText = "Adding...";
            //mare request
            const result = await addLab(formData)
            //update button state
            submitButton.disabled = false;
            loading = false;
            submitButton.innerText = "Add Lab";

            if (result.success) {
                router.push("/admin/labs/" + result.data._id);
            } else {
                Alert("error", "Error : " + result.message);
            }
        } else {
            submitButton.innerText = "Updating...";
            //make request
            const result = await updateLab(formData, data?._id);
            //update button state
            submitButton.disabled = false;
            loading = false;
            submitButton.innerText = "Update Lab";

            if (result?.success) {
                Alert("success", "Lab updated successfully");
                router.refresh()
            }
            else Alert("error", "Error updating Lab: " + result?.message);

        }
    }
    return (<form onSubmit={submitHandler}
        className="grid grid-cols-2 gap-4 w-full mt-8"
    >
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="labName" className='p-1'>Lab Name</label>
            <input
                name="labName"
                type="text"
                id='labName'
                required
                defaultValue={data?.name}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Lab Name"
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="labType" className='p-1'>Lab Type</label>
            <input

                name="labType"
                type="text"
                id='labType'
                required
                defaultValue={data?.type}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="eg. chemistry, network, computer"
            />
        </fieldset>

        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="dept" className='p-1'>Dept.</label>
            <input

                name="dept"
                type="text"
                id='dept'
                required
                defaultValue={data?.dept}
                className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Name of Department"
            />
        </fieldset>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="submitButton" className='p-1 invisible pointer-events-none'>Submit</label>
            <button
                id="submitButton"
                name='submitButton'
                className="btn btn-block  bg-custom-blue hover:bg-green-500 font-semibold text-white rounded-lg"
            >
                {preData?.type === "add" ? "Add Lab" : "Update Lab"}
            </button>
        </fieldset>
    </form>

    );
}

export default LabForm;

async function addLab(data) {
    try {
        const req = await fetchWithTimeOut(API + "/admin/create-lab", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data }),
            credentials: "include",
        }, 10000)
        const res = await req.json();
        return res;
    } catch (error) {
        return { success: false, message: error.message }
    }
}
async function updateLab(data, id) {
    try {
        const req = await fetchWithTimeOut(API + "/admin/update-lab", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data, id }),
            credentials: "include",
        }, 12000)
        const res = await req.json();
        return res;
    } catch (error) {
        return { success: false, message: error.message }
    }
}