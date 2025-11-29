import { Suspense } from "react";
import CountUsers from "./_components/Count/CountUsers";
import { FaRegUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { VscGroupByRefType } from "react-icons/vsc";
import CountItems from "./_components/Count/CountItems";
import CountLabs from "./_components/Count/CountLabs";
import CountComponents from "./_components/Count/CountComponents";
export const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <h2 className="text-lg font-bold mb-2">Users Stats</h2>
      <div className="flex gap-3 ">
        <div className="px-10 rounded py-5 bg-base-300 flex flex-col items-center justify-center gap-3">
          <FaRegUser className="text-3xl text-custom-blue" />
          <div className="flex gap-2">
            <p>Total Users</p>
            <Suspense fallback={0}>
              <CountUsers type="all" />
            </Suspense>
          </div>
        </div>
        <div className="px-14 rounded py-5 bg-base-300 flex flex-col items-center justify-center gap-3">
          <GrUserAdmin className="text-3xl text-orange-500" />
          <div className="flex gap-2">
            <p>Staffs</p>
            <Suspense fallback={0}>
              <CountUsers type="staff" />
            </Suspense>
          </div>
        </div>
        <div className="px-14 rounded py-5 bg-base-300 flex flex-col items-center justify-center gap-3">
          <RiAdminFill className="text-3xl text-red-500" />
          <div className="flex gap-2">
            <p>Admin </p>
            <Suspense fallback={0}>
              <CountUsers type="admin" />
            </Suspense>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mt-4 mb-2">Items and components</h2>
      <div className="flex gap-3">
        <CountItems></CountItems>
        <CountComponents></CountComponents>
      </div>
      <div className="flex mt-8">
        <div className="text-md font-bold mt-4 mb-2 bg-base-300 flex items-center gap-3 px-5 py-2 ">
          <VscGroupByRefType className="text-3xl text-green-500" />
          <p>Total Number of Labs</p>
          <Suspense fallback={0}>
            <CountLabs />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
