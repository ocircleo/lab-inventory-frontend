import React from "react";
import CourseForm from "../_components/CourseComponent/CourseForm";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Another Course</h1>
      <div className="">
        <CourseForm
          preData={{
            type: "add",
            data: {},
          }}
        ></CourseForm>
      </div>
    </div>
  );
};

export default Page;
