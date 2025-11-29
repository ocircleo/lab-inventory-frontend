import { NextResponse } from "next/server";
import { API_URL, WEB_URL } from "./config";
export const middleware = async (request) => {
  let cookie = request.cookies.get("access_token")?.value;
  let path = request.nextUrl.pathname;
  let { passed, to } = await userValidation(path, cookie);
  let response = NextResponse.next();

  if (passed) return response;

  if (!passed) return Response.redirect(`${WEB_URL}` + to);
};

export const config = {
  // matcher: ["/user/:path*"]
  matcher: ["/admin/:path*", "/user/:path*", "/staff/:path*"],
};

async function userValidation(path, cookie) {
  if (!cookie) return { passed: false, to: `/login?redirect=${path}` };

  try {
    let res = await fetchUser(cookie);
    const result = await res.json();
    //if user is found successfully the validate path
    if (result.data?.email_address) {
      if (path.startsWith("/admin") && result.data?.role == "admin")
        return { passed: true, to: path };
      else if (path.startsWith("/staff") && result.data?.role == "staff")
        return { passed: true, to: path };
      else if (path.startsWith("/user") && result.data?.role == "user")
        return { passed: true, to: path };
      //if user tries to go to unauthorized paths then redirect
      else return { passed: false, to: "/auth-error" };
    }
    //fallback if user data is tampered of not found but api response is successful
    return { passed: false, to: "/auth-reset" };
  } catch (error) {
    //if error happens while loading user info
    return { passed: false, to: "/auth-reset" };
  }
}
async function fetchUser(cookie) {
  return await fetch(API_URL + "/auth/login_with_token", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token: cookie }),
  });
}
