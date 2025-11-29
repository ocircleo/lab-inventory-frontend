import { cookies } from "next/headers";

const MainLayout = async ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-base-200 flex flex-col justify-between">
      <div className=" w-full grow">{children}</div>
    </div>
  );
};

export default MainLayout;
