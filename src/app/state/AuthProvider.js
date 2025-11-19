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
        credentials: "include",
      });
      const result = await res.json();
      if (result.success) setUser(result.data);
    } catch (error) {
      Alert("error", "Failed to fetch user data");
      console.log(error);
    }
  };
  const fetchUserDataAuto = async () => {
    if (user?.email) return console.log("User already fetched");
    try {
      const res = await fetch(API + "/auth/login_with_cookie", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const result = await res.json();
     
      if (result.success) setUser(result.data);
    } catch (error) {
      Alert("error", "Failed to fetch user data");
      console.log(error);
    }
  };
  const logOut = async () => {
    const req = await fetch(`${API}/auth/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const res = await req.json();
    if (res.success) {
      setUser(null);
      return true;
    }
    return false;
  };

  const data = { user, setUser, fetchUserData,fetchUserDataAuto, logOut };
  useEffect(() => {
    console.log("Auth context rendered");
  }, []);
  return <AuthContext.Provider value={data}>{children} </AuthContext.Provider>;
};

export default AuthProvider;
