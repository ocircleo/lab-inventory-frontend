import { cookies } from "next/headers";

const MainLayout = async ({ children }) => {
  const cookie = await cookies();
  let access_token = cookie.get("access_token")?.value;

  // !-- hare according to cookie we will try to load user detail
  // and show it also show dashboard link if found user
  // This page will contain the product info may be a guide video and the above feature
  return (
    <div className="min-h-screen w-full bg-base-200 flex flex-col justify-between">
      <div className=" w-full grow">{children}</div>
    </div>
  );
};

export default MainLayout;
