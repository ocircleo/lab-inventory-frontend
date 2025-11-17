import React from "react";
import CourseForm from "../../_components/CourseComponent/CourseForm";
import API from "@/app/components/API";
import CourseImage from "../../_components/CourseComponent/CourseImage";
import Link from "next/link";

const Page = async ({ params }) => {
  const courseId = params?.userId;
  let data;
  try {
    const req = await fetch(API + "/apiUrl" + courseId, {
      cache: "no-store",
    });
    data = await req.json();
  } catch (error) {
    console.log("Error fetching course data: ", error);
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Update Course</h1>
      <div className="">
        <CourseImage data={data?.data || {}} />
        <div className="col-span-2 flex items-center gap-4 my-6 ">
          <p className="font-semibold">Edit Modules</p>
          <Link
            href={"/admin/course/" + courseId + "/modules"}
            className=" bg-custom-blue hover:bg-green-500 font-semibold text-white px-3 py-1"
          >
            Go to modules
          </Link>
        </div>
        <CourseForm
          preData={{
            type: "update",
            data: data?.data || {},
          }}
        ></CourseForm>
      </div>
    </div>
  );
};

export default Page;
