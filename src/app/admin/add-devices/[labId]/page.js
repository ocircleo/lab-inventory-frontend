import NoDataFound from "@/app/_components/noDataFound/NoDataFound";
import { cookies } from "next/headers";
import AddDeviceForm from "./AddDeviceForm";
import LabTitle from "@/app/_components/lab/LabTitle";
import { API_URL } from "@/config";

const Page = async ({ params }) => {
  try {
    let id = (await params).labId;
    const req = await fetch(`${API_URL}/common/labs/${id}`, {
      method: "GET",
      headers: { Cookie: (await cookies()).toString() },
    });
    const res = await req.json();
    const data = await res.data;

    if (!res?.success)
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Add Device</h1>
          <NoDataFound message={"No Data Found"}></NoDataFound>
        </div>
      );
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Add Device</h1>
        <LabTitle data={data} />
        <AddDeviceForm data={data} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Add Device</h1>
        <NoDataFound
          message={"Some Error Happened while Loading the data"}
        ></NoDataFound>
      </div>
    );
  }
};

export default Page;
