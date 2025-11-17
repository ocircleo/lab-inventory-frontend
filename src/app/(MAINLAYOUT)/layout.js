import Footer from "@/app/components/footer/Footer";
import { cookies } from "next/headers";
import Navbar from "../components/navbar/Navbar";

const MainLayout = async ({ children }) => {
  const cookie = await cookies();
  let access_token =  cookie.get("access_token")?.value;
  // console.log("Request: ", data);
  //Theme changer event Handler DARK or LIGHT

  return (
    <div className="min-h-screen w-full bg-base-200 flex flex-col justify-between">
      <Navbar data={access_token}></Navbar>
      <div className=" w-full grow">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
