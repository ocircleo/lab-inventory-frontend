import React from "react";
import CoursesListView from "./CoursesListView";

const Page = async () => {
  try {
    const req = await fetch("http://192.168.0.100:5000");
    const res = await req.json();
    const data = (await res?.data?.courses) || [...new Array(10).keys()];
    console.log(res);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">List of all Courses</h1>
        <div>
          <CoursesListView courses={data}></CoursesListView>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">List of all Courses</h1>
        <div>Error loading courses</div>
      </div>
    );
  }
};

export default Page;
