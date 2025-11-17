"use client";
import React from "react";
const EditProfileForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <input
          name="name"
          type="text"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Name"
        />
      </fieldset>
      <fieldset className="join w-full">
        <input
          name="email"
          type="email"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Email"
        />
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Update</button>
    </form>
  );
};
export default EditProfileForm;
