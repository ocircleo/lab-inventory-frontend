export const metadata = {
  title: "Profile",
  description: "View your profile information.",
};
import API from "@/app/_components/API";
import { cookies } from "next/headers";

const Page = async () => {
  try {
    const cookie = (await cookies()).get("access_token").value;
    if (cookie) {
      const req = await fetch(API + "/auth/login_with_token", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: cookie }),
      });
      const res = await req.json();
      if (res?.data?.email_address) {
        let user = res.data;
        return (
          <div className="px-6 flex justify-between flex-col py-3 relative">
            <div>
              <h1 className="text-2xl font-bold mb-6">Profile Overview</h1>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 p-2  pb-5 rounded">
                  <label htmlFor="name" className="font-bold">
                    User Name
                  </label>
                  <input
                    disabled
                    type="text"
                    id="name"
                    name="name"
                    className=" py-3 px-2 bg-base-300 rounded outline-indigo-500"
                    placeholder="your name"
                    defaultValue={user?.name}
                  ></input>
                </div>

                <div className="flex flex-col gap-2 p-2  pb-5 rounded">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    disabled
                    type="text"
                    id="email"
                    name="email"
                    className=" py-3 px-2 bg-base-300 rounded outline-indigo-500"
                    placeholder="your Email"
                    defaultValue={user?.email_address}
                    title="You Can't Edit Email"
                  ></input>
                </div>
                <div className="flex flex-col gap-2 p-2  rounded">
                  <label htmlFor="phone" className="font-bold">
                    Phone Number
                  </label>
                  <input
                    disabled
                    type="text"
                    id="phone"
                    name="phone"
                    className=" py-3 px-2 bg-base-300 outline-indigo-500 rounded"
                    placeholder="Phone number"
                    defaultValue={user?.phone || "None"}
                    title="You Can't Edit Phone"
                  ></input>
                </div>
                <div className="flex flex-col gap-2 p-2  rounded">
                  <label htmlFor="role" className="font-bold">
                    Current Role
                  </label>
                  <input
                    disabled
                    type="text"
                    id="role"
                    name="role"
                    className=" py-3 px-2 bg-base-300 outline-indigo-500 rounded"
                    placeholder="role"
                    defaultValue={user?.role}
                    title="You Can't Edit Role"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Profile Overview</h1>
        <div className="flex items-center justify-center py-16">
          <p className="text-2xl font-semibold text-orange-600">
            Failed to load Data
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Profile Overview</h1>
        <div className="flex items-center justify-center py-16">
          <p className="text-2xl font-semibold text-orange-600">
            Some error happened while loading data
          </p>
        </div>
      </div>
    );
  }
};

export default Page;
