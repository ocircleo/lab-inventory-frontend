import React from "react";
import CourseForm from "../_components/CourseComponent/CourseForm";
import LabForm from "../_components/lab/LabForm.jsx";

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
