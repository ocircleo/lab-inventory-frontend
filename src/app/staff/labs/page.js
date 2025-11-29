import { API_URL } from "@/config";
import LabList from "../../_components/lab/LabList";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
const Page = async () => {
  let data = [];
  try {
    const req = await fetch(`${API_URL}/common/staffLabs`, {
      method: "GET",
      headers: { Cookie: (await cookies()).toString() },
      credentials: "include",
    });
    const result = await req.json();
  
    data = result.data || [];
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Assigned Labs</h1>
      {<LabList data={data} type={"staff"} />}
    </div>
  );
};

export default Page;

//form
//load data
//
