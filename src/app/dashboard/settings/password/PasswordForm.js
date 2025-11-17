"use client";
import React from "react";
const PasswordForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <input
          name="oldPassword"
          type="password"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Old Password"
        />
      </fieldset>
      <fieldset className="join w-full">
        <input
          name="newPassword"
          type="password"
          required
          minLength={6}
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="New Password"
        />
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Change Password</button>
    </form>
  );
};
export default PasswordForm;
