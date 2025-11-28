import API from "@/app/_components/API";
import LabDetail from "@/app/_components/lab/LabDetail";
import LabForm from "@/app/_components/lab/LabForm";
import LabTitle from "@/app/_components/lab/LabTitle";
import NoDataFound from "@/app/_components/noDataFound/NoDataFound";
import { cookies } from "next/headers";

const Page = async ({ params }) => {
  try {
    let id = (await params).labId;
    const req = await fetch(`${API}/common/labs/${id}`, {
      method: "GET",
      headers: { Cookie: (await cookies()).toString() },
    });
    const res = await req.json();
    const data = await res.data;
    // console.log(data);
    if (!res.success)
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Edit Lab</h1>
          <NoDataFound message={"No Data Found"}></NoDataFound>
        </div>
      );
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Lab</h1>
        <LabTitle data={data} />
        <LabForm preData={{ type: "update", data }} />
        <LabDetail data={data} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Lab</h1>
        <NoDataFound
          message={"Some Error Happened while Loading the data"}
        ></NoDataFound>
      </div>
    );
  }
};

export default Page;
