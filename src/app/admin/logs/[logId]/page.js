import { API_URL } from "@/config";
import NoDataFound from "@/app/_components/noDataFound/NoDataFound";
import React, { Suspense } from "react";
import Item from "./Item";
import BackButton from "@/app/_components/BackButton/BackButton";

const Page = async ({ params }) => {
  const reqParams = await params;
  const logId = await reqParams.logId;

  let data;
  try {
    const req = await fetch(`${API_URL}/common/logs/${logId}`);
    const result = await req.json();
    data = result?.data || {};
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Log Detail</h1>
        <BackButton>Back to previous page</BackButton>
        <p>Date: {data?.createdAt.split("T")[0]}</p>
        <div>
          <p className="py-2">Moved From</p>
          <Suspense fallback={SimpleLoading()}>
            <Item type={data?.moveFrom} id={data?.moveFromId}></Item>
          </Suspense>
        </div>
        <div>
          <p className="py-2">Moved To</p>
          <Suspense fallback={SimpleLoading()}>
            <Item type={data?.moveTo} id={data?.moveToId}></Item>
          </Suspense>
        </div>
        <div className="flex flex-col gap-2">
          <p className="py-2">Moved Items</p>
          {(data?.itemId || []).map((ele) => (
            <Suspense key={ele} fallback={"loading"}>
              <Item type={data?.itemType} id={ele}></Item>
            </Suspense>
          ))}
        </div>
        <div>
          <p className="py-2">Moved By</p>
          <Suspense fallback={SimpleLoading()}>
            <Item type={"user"} id={data?.userId}></Item>
          </Suspense>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Log Detail</h1>
      <NoDataFound
        message={"Some Error Happened while Loading the data"}
      ></NoDataFound>
    </div>;
  }
};

export default Page;

const SimpleLoading = () => {
  return <div className="bg-base-300 p-3 ">Loading...</div>;
};
