function Profile({ data }) {
    const { user, fetchUserData } = useContext(AuthContext)
    useEffect(() => {
        if (data == undefined) return;
        fetchUserData(data);
    }, []);
    return (<>
        <div className="hidden lg:dropdown dropdown-end">
            {/* if user is not logged in then show this dropdown */}
            {user?.email ? <>
                {/* If User is  logged in then show this dropdown */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Courses
                            {/* <span className="badge">New</span> */}
                        </a>
                    </li>
                    <li><Link href={user?.role == "admin" ? "/admin" : "/dashboard"}>{user?.name ? user?.name : "profile"}</Link></li>
                    <li><Link href={"/logout"}>Logout</Link></li>
                </ul>
            </> :
                <>
                    <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar ms-8">
                        <button className='btn bg-custom-blue text-white'>Get Started</button>
                    </div>
                    <ul
                        tabIndex={1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>
                    </ul>
                </>}

        </div>
    </>)
}
export default Profile