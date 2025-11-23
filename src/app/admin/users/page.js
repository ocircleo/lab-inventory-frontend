import API from "@/app/components/API";
import Users from "./Users";
import Form from "./Form";
import { Suspense } from "react";
//*** important --------- make an query validator function for queries in utls folder and use it everywhere */
//*** important --------- make an fetch function for get in order to ski writing try catch block every time  */
const Page = async ({ searchParams }) => {
  
  const allSearchParams = await searchParams;
  const page = allSearchParams.page || 1;

  let query = "?";
  for (const key in allSearchParams) {
    if (query !== "?") query += "&";
    query += `${key}=${allSearchParams[key]}`;
  }

  //loads the total number of users
  //based on the numbers of it loads the pagination
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">Search and Manage Users</h1>

      <Form queries={allSearchParams} />
      <p className="py-2 text-xl font-semibold">
        Users List Page: <span className="text-blue-600"> {page}</span>
      </p>
      <Suspense
        fallback={
          <div>
            <p>Loading users...</p>
          </div>
        }
      >
        <Users query={query}></Users>
      </Suspense>
    </div>
  );
};

export default Page;

/* need a searchbar with filters <Component/>
            list of users with pagination  <Component/>
            each user has a view details button {children}
            on clicking view details it opens a modal with user details and options to change role, delete user etc.{children}
            need pagination at the bottom  <Component/>
            */
//pagination will be based on path query ?page=1&limit=10 not state
