import { cookies } from "next/headers";

import API from "../_components/API";
import DefaultPage from "./DefaultPage";
import LoggedHome from "../_components/LoggedHome/LoggedHome";

const Page = async () => {
  try {
    const cookie = (await cookies()).get("access_token")?.value;
    if (cookie) {
      const req = await fetch(API + "/auth/login_with_token", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: cookie }),
      });
      const res = await req.json();
      if (res?.data?.email_address) return <LoggedHome user={res.data} />;
    }
    return <DefaultPage error={false} />;
  } catch (error) {
    console.log(error);
    return <DefaultPage error={true} />;
  }
};

export default Page;
