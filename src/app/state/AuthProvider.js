"use client";

import { createContext, useEffect, useState } from "react";
import API from "../components/API";
import Alert from "../components/alert/Alert";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async (cookie) => {
    if (user?.email) return console.log("User already fetched");
    try {
      const res = await fetch(API + "/auth/login_with_token", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: cookie }),
      });
      const result = await res.json();
      if (result.success) setUser(result.data);
    } catch (error) {
      Alert("error", "Failed to fetch user data");
      console.log(error);
    }
  };
  const logOut = async () => {
    const res = await fetch(API + "/auth/login_with_token", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: cookie }),
    });
    const result = await res.json();
    if (result.success) setUser(result.data);
  };

  const data = { user, setUser, fetchUserData };
  useEffect(() => {
    console.log("Auth Provider Rendered", document.cookie);
  }, []);
  return <AuthContext.Provider value={data}>{children} </AuthContext.Provider>;
};

export default AuthProvider;
