"use client";
import React from "react";
const ReplyMessageForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-8">
      <fieldset className="join w-full">
        <input
          name="replyTo"
          type="text"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Reply to (user)"
        />
      </fieldset>
      <fieldset className="join w-full">
        <textarea
          name="message"
          required
          className="join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Type your reply..."
        />
      </fieldset>
      <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">Reply</button>
    </form>
  );
};
export default ReplyMessageForm;
