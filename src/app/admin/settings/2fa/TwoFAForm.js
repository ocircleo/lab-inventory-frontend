"use client";
import React from "react";
const TwoFAForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <input
          name="code"
          type="text"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="2FA Code"
        />
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Enable/Disable 2FA</button>
    </form>
  );
};
export default TwoFAForm;
