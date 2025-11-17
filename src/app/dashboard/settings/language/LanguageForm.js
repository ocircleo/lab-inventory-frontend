"use client";
import React from "react";
const LanguageForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <select
          name="language"
          required
          className="join-item border-0 bg-base-300 focus:outline-0 w-full"
        >
          <option value="en">English</option>
          <option value="bn">Bangla</option>
          <option value="hi">Hindi</option>
        </select>
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Save Language</button>
    </form>
  );
};
export default LanguageForm;
