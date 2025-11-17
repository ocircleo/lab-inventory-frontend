import React from "react";
import NavbarCompo from "./NavbarCompo";
import Link from "next/link";
import ActiveLink from "@/app/utls/ActiveLink/ActiveLink";
import Search from "./compo/Search";
import ThemeButton from "../theme/ThemeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./compo/Profile";
import Dropdown from "daisyui/components/dropdown";
const fixedLinks = [
  { path: "/home", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];
const Navbar = async ({ data }) => {
  // return (
  //   <div className="bg-base-100">
  //     <div className="navbar h-20 w-full lg:w-[90%] mx-auto">
  //       {/* logo */}
  //       <div className="navbar-start">
  //         <Link href={"/"} className="btn btn-ghost text-xl">
  //           <img src={"/images/logos/logo.png"} alt="alt" className="h-full" />
  //         </Link>
  //         <div className=" hidden lg:flex font-semibold">
  //           <ul className="menu menu-horizontal px-1">
  //             {fixedLinks.map((ele, index) => (
  //               <ActiveLink to={ele.path} key={"lg-nav-" + index}>
  //                 {ele.title}
  //               </ActiveLink>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>

  //       {/* side icons for profile and search and hamburger*/}
  //       <div className="navbar-end">
  //         <Search />
  //         <ThemeButton />
  //         <Profile data={data} />

  //         {/* small screen dropdown */}
  //         <div className="lg:hidden">
  //           <div
  //             role="button"
  //             onClick={toggleNav}
  //             className="btn btn-ghost btn-circle"
  //           >
  //             <GiHamburgerMenu className="text-2xl" />
  //           </div>
  //           <div
  //             id="dropdown"
  //             className={`bg-base-300  z-50  fixed ${
  //               show ? "left-0" : "left-full"
  //             } duration-100 top-0 shadow w-full h-screen`}
  //           >
  //             <Dropdown toggleNav={toggleNav} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return <NavbarCompo data={data} />;
};

export default Navbar;

//common links will load from server
// the profile and sidebar will be client site
