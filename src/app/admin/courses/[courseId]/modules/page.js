import React from "react";
import SingleModule from "./SingleModule";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Update Course</h1>
      <div className=" flex flex-col gap-4">
        <SingleModule
          data={{ name: "Sample Module" }}
          index={0}
          currentPage={0}
        />
        <SingleModule
          data={{ name: "Sample Module 2" }}
          index={0}
          currentPage={0}
        />
        <SingleModule
          data={{ name: "Sample Module 3" }}
          index={0}
          currentPage={0}
        />
      </div>
    </div>
  );
};

export default Page;
