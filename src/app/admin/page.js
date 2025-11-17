"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../state/AuthProvider";

const Page = () => {
  const { user, fetchUserDataAuto } = useContext(AuthContext);
  useEffect(() => {
    if (!user) fetchUserDataAuto();
  }, []);
  
  return (
    <div className="flex items-center justify-center flex-col h-full text-xl">
      <h1>Admin page</h1>
      <p>User name: {user?.name}</p>
      <p>User Email: {user?.email}</p>

    </div>
  );
};

export default Page;
