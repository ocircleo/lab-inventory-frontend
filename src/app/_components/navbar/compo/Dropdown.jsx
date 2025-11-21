function Dropdown({ toggleNav }) {
    return (<>
        <div className='navbar justify-between w-full h-20  items-center'>
            <a className="btn btn-ghost text-xl"><img src={"/images/logos/logo.png"} alt="alt" className='h-full' /></a>
            <button className="btn btn-sm btn-circle btn-ghost  text-lg" onClick={toggleNav}><RxCross1 className='text-xl font-semibold' /></button>
        </div>

        <ul className="menu bg-base-200 rounded-box w-full h-full overflow-y-scroll
        ">
            <li><a>Home</a></li>
            <li><a>Bootcamp</a></li>
            <li><a>Testimonials</a></li>
            <li>
                <DropdownSubMenuAccount />
            </li>
        </ul>
    </>)
}
function DropdownSubMenuAccount() {
    const { user, fetchUserData } = useContext(AuthContext)
    useEffect(() => {
        if (data == undefined) return;
        fetchUserData(data);
    }, []);
    return (<>
        {
            user?.email ? <>
                {/* If User is logged in then show this dropdown */}
                <details open>
                    <summary className='bg-base-300'>
                        <div className="w-8 h-8 rounded-full">
                            <img className='rounded-full'
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        Account
                    </summary>
                    <ul>
                        <li><a>Courses</a></li>
                        <li><Link href={user?.role == "admin" ? "/admin" : "/dashboard"}>{user?.name ? user?.name : "profile"}</Link></li>
                        <li><Link href={"/logout"}>Logout</Link></li>

                    </ul>
                </details>

            </> : <> {/* If User is not logged in then show this dropdown */}
                <details open>
                    <summary className='bg-base-300'>Get Started</summary>
                    <ul>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>

                    </ul>
                </details></>
        }





    </>)
}
export default Dropdown