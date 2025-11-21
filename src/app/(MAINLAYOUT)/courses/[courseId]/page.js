import React from "react";
import NotFound from "@/app/not-found";
import API from "@/app/components/API";

const Page = async ({ params, searchParams }) => {
  let courseId = (await params).courseId;
  let course_query = await searchParams;

  try {
    const req = await fetch(`${API}/common/get-course/${courseId}`);
    const res = await req.json();
    return (
      <>
        <div>Course</div>
      </>
    );
  } catch (error) {
    console.log(error);
    return NotFound();
  }

  // console.log({ course_title, course_query });
};

export default Page;
