import React from "react";
import TemplateComponent from "./TemplateComponent";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Another Template</h1>
      <div className="">
        <TemplateComponent />
      </div>
    </div>
  );
};

export default Page;
