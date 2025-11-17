"use client";
import React from "react";
const TimeZoneForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <select
          name="timezone"
          required
          className="join-item border-0 bg-base-300 focus:outline-0 w-full"
        >
          <option value="Asia/Dhaka">Asia/Dhaka</option>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
          <option value="Asia/Shanghai">Asia/Shanghai</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Europe/London">Europe/London</option>
        </select>
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Save Time Zone</button>
    </form>
  );
};
export default TimeZoneForm;
