import LabForm from "@/app/_components/lab/LabForm";
import React from "react";


const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Another Lab</h1>
      <div className="">
        <LabForm preData={{type:"add"}}></LabForm>
      </div>
    </div>
  );
};

export default Page;
