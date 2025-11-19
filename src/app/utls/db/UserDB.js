import { API } from "../api/API";

const { getCookie, removeCookie } = require("../cookie/Cookie");

let user_cached = null;
let loading = false;
const fetchUser = async (cookie) => {
  try {
    const result = await fetch(API + "auth/auto_login", {
      method: "PUT",
      headers: { Authorization: `${cookie}` },
    });
    const data = await result.json();
    user_cached = data?.result;
    loading = false;

    return user_cached;
  } catch (error) {
    console.log(error);
    loading = false;
    user_cached = null;
    return user_cached;
  } finally {
    console.clear();
  }
};
let promise;
async function getUser() {
  if (user_cached) {
   
    return user_cached;
  }

 

  let cookie = getCookie("accessToken");
  if (!cookie) {
 
    return null;
  }
  if (loading) {
  
    return await promise;
  }
  loading = true;
  promise = fetchUser(cookie);
  return await promise;
}
function clearUser() {
  removeCookie("accessToken");
  user_cached = null;
}
export { clearUser };
export default getUser;
