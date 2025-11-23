import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Add Devices page</h1>
      <p className="text-orange-500 p-3">This page is not for viewing</p>
      <Link href={"/labs"} className="link text-custom-blue p-3">
        Go To Labs page and select add devices form there
      </Link>
    </div>
  );
};

export default Page;
