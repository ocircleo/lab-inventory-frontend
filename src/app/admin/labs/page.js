"use client";
import API from "@/app/_components/API";
import React, { useEffect, useRef, useState } from "react";
import LabList from "../../_components/lab/LabList";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  let timeOut;
  const searchLabs = (e) => {
    e.preventDefault();
    let form = formRef.current;
    let inputValue = form.temName.value;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fetchLabsData(inputValue);
    }, 400);
  };
  const fetchLabsData = async (text) => {
    if (text.length == 0) return setData([]);
    try {
      setLoading(true);

      const req = await fetch(`${API}/common/searchLab?lab=${text}`);
      const result = await req.json();

      setLoading(false);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLabsData("@all");
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search Labs</h1>
      <form ref={formRef} onSubmit={searchLabs}>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
          <label htmlFor="temName" className="p-1">
            Lab Name
          </label>
          <input
            onChange={searchLabs}
            name="temName"
            type="text"
            id="temName"
            defaultValue={"@all"}
            required
            className="p-2 border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
            placeholder="Template Name"
          />
        </fieldset>
      </form>
      <p
        className={`text-xs font-semibold ${
          loading ? "visible" : "invisible"
        } p-1 `}
      >
        Loading...
      </p>
      {<LabList refresh={searchLabs} data={data} type={"admin"}/>}
    </div>
  );
};

export default Page;

//form
//load data
//
