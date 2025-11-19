"use client";
import { useEffect, useRef, useState } from "react";
import Pagination from "@/app/utls/pagination/Paginate";
import {
  getSingleUserBlock,
  setMultiUser,
  setSingleUserBlock,
} from "@/app/utls/db/UsersDB";
import User from "./User";
import API from "@/app/components/API";

const Page = () => {
  const [users, setUsers] = useState({ loading: true, data: [] });
  const [pages, setPages] = useState({ current: 0, length: 0 });
  const formRef = useRef(null);

  const fetchData = async (key, city, page) => {
    setUsers({ loading: true, data: [] });
    try {
      const response = await fetch(
        `${API}/common/search_users?phone=${key}&role=${city}&page=${page}`
      );
      const data = await response.json();
    
      setPages({ current: page, length: data?.result?.length });
      setUsers({ loading: false, data: data?.result?.data });
      let queryString = key + city; // For validating if search params changed
      setMultiUser(data?.result?.data); // for finding on info using id quickly (caching data)
      setSingleUserBlock(page, data?.result?.data, queryString); //for page like page 0, 1 to etc. (caching data)
    } catch (error) {
      console.log(error);
    }
  };

  let timeout;
  const formChange = (page, timer = 400) => {
    let key, role;
    if (formRef.current) {
      let form = formRef.current;
      key = form.key.value;
      role = form.role.value;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchData(key, role, page);
    }, timer);
  };
  const submitForm = (e) => {
    e.preventDefault();
    formChange(0);
  };
  const paginate = (to) => {
    const cachedData = getSingleUserBlock(to);
    if (cachedData) {
      setUsers({ loading: false, data: cachedData });
      setPages({ current: to, length: pages.length });
      return;
    }
    if (to < 0) to = 0;
    if (to > pages.length / 12) to = Math.floor(pages.length / 12);
    formChange(to, 0);
  };
  useEffect(() => {
    fetchData("", "all", 0);
  }, []);
  return (
    <div className="bg-base-100 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-6">Users Finder</h1>
        <form
          onSubmit={submitForm}
          ref={formRef}
          onChange={submitForm}
          className="flex justify-between flex-wrap gap-2 md:gap-4 lg:gap-6"
        >
          <fieldset className="flex flex-col gap-2 flex-grow">
            <label htmlFor="key" className="font-semibold">
               Phone Number
            </label>
            <input
              type="text"
              name="key"
              placeholder="please Enter phone number"
              id="key"
              className="py-3 px-2 bg-base-300 rounded outline-indigo-500 w-full "
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="role" className="font-semibold">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="py-3 px-2 bg-base-300  rounded outline-indigo-500 "
            >
              <option value="all">All</option>
              <option value="user">User</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </fieldset>
        </form>
        <div className="bg-base-300  grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center mt-4">
          <div className="col-span-1">Index</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-3">ID</div>
          <div className="col-span-4">Email</div>
          <div className="col-span-2">Detail</div>
        </div>
        {users.loading ? (
          <p className="text-center py-12 text-lg font-semibold">Loading ...</p>
        ) : (
          <>
            {users?.data?.map((ele, index) => (
              <User
                key={index}
                index={index}
                currentPage={pages.current}
                data={ele}
              ></User>
            ))}
          </>
        )}
      </div>
      <div className="flex gap-4">
        <p className="py-2">
          Page {pages.current} / {Math.floor(pages.length / 12)}
        </p>
        <p className="py-2">Users found: {pages.length}</p>
      </div>
      <Pagination current={pages.current} paginate={paginate}></Pagination>
    </div>
  );
};

export default Page;
