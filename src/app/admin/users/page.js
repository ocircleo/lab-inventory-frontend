"use client";
import { API_URL } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import SingleUser from "./SingleUser";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  let timeOut;
  const searchLabs = (e) => {
    e.preventDefault();
    let form = formRef.current;
    let inputValue = form.email.value;
    let role = form.role.value;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fetchUsersData(inputValue, role);
    }, 400);
  };
  const fetchUsersData = async (text, role) => {
    if (text.length == 0) text = "@all";
    try {
      setLoading(true);
      const req = await fetch(
        `${API_URL}/common/searchUserWithFilter?user=${text}&role=${role}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const result = await req.json();

      setData(result?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsersData("@all", "@all");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search Users</h1>
      <form
        ref={formRef}
        onSubmit={searchLabs}
        className="flex justify-between gap-12 bg-base-300 p-2"
      >
        <fieldset className="w-full">
          <input
            onChange={searchLabs}
            name="email"
            type="text"
            id="email"
            defaultValue={"@all"}
            className="p-2 border-0 bg-base-100  placeholder:text-light-gray  focus:outline-0 w-full"
            placeholder="Email Address"
          />
        </fieldset>
        <fieldset className="select select-neutral w-36 outline-0 focus:outline-0 shrink-0">
          <select
            name="role"
            id="role"
            onChange={searchLabs}
            className="bg-base-300 outline-0 focus:outline-0"
          >
            <option value={"@all"}>All</option>
            <option value={"admin"}>Admin</option>
            <option value={"staff"}>Staff</option>
            <option value={"user"}>User</option>
          </select>
        </fieldset>
      </form>
      <p
        className={`text-xs font-semibold ${
          loading ? "visible" : "invisible"
        } p-1 `}
      >
        Loading...
      </p>
      <div className="flex flex-col gap-1">
        {data?.map((ele, index) => (
          <SingleUser
            searchLabs={searchLabs}
            key={ele._id}
            index={index}
            data={ele}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

//form
//load data
//
