"use client";
import API from "@/app/_components/API";
import React, { useEffect, useRef, useState } from "react";
import TemplateList from "./TemplateList";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  let timeOut;
  const searchTemplate = (e) => {
    e.preventDefault();
    let form = formRef.current;
    let inputValue = form.temName.value;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fetchTemplateData(inputValue);
    }, 400);
  };
  const fetchTemplateData = async (text) => {
    if (text.length == 0) return setData([]);
    try {
      setLoading(true);

      const req = await fetch(`${API}/common/searchTemplate?template=${text}`);
      const result = await req.json();

      setLoading(false);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTemplateData("@all")
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search Template</h1>
      <form ref={formRef} onSubmit={searchTemplate}>
        <fieldset className="col-span-2 md:col-span-1 flex flex-col gap-2">
          <label htmlFor="temName" className="p-1">
            Template Category (Unique name)
          </label>
          <input
            onChange={searchTemplate}
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
      {<TemplateList refresh={searchTemplate} data={data} />}
    </div>
  );
};

export default Page;

//form
//load data
//
