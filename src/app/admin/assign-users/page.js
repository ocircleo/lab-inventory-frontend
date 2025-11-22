import API from "@/app/_components/API";
import { cookies } from "next/headers";
import MainCompo from "./MainCompo";

const Page = async ({ searchParams }) => {
  let data;
  try {
    let id = (await searchParams).lab;
    const req = await fetch(`${API}/common/labs/${id}`, {
      method: "GET",
      headers: { Cookie: (await cookies()).toString() },
    });
    const res = await req.json();
    data = await res.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Assign Users to lab</h1>
      <MainCompo data={data}></MainCompo>
    </div>
  );
};

export default Page;
