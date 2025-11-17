"use client";
import React from "react";
const NotificationsForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <input
          name="notification"
          type="text"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Notification title"
        />
      </fieldset>
      <fieldset className="join w-full">
        <textarea
          name="details"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Notification details..."
        />
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Mark as Read</button>
    </form>
  );
};
export default NotificationsForm;
