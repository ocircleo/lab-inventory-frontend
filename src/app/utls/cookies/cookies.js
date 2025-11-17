import API from "@/app/components/API";

const setCookie = (key, value, day) => {
  removeCookie("token");
  // Set a cookie with an expiration date
  let date = new Date();
  date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000); //days from now
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${key}=${value};` + expires;
};
function getCookie(name) {
  let cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (cookieName == name) {
      return cookieValue;
    }
  }
  return null;
}
let user_cached = {};
async function getCachedUser() {
  if (user_cached?.email) return user_cached;
  let cookie = getCookie("token");
  try {
    if (cookie) {
      const res = await fetch(API + "/auth/login_with_token", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: cookie }),
      });
      const data = await res.json();
      user_cached = await data?.data;
      return user_cached;
    } else return null;
  } catch (error) {
    return null;
  }
}
async function setCachedUser(user) {
  user_cached = user;
}
async function logout() {
  // Remove the token cookie
  removeCookie("token");
  // Optionally, you can also clear the cached user
  user_cached = null;
}
function removeCookie(key) {
  const paths = ["/", "/user", "/dashboard", "/admin"]; // Add other specific paths where the cookie may have been set.
  paths.forEach((path) => {
    document.cookie = `${key}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
}
export { setCookie, getCookie, removeCookie, getCachedUser, setCachedUser };
