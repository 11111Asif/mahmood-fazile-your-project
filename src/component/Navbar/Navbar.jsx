

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About me</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-[#E60026]">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-[#FD6F00]"><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>About me</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#E46400] w-[85px] h-[33px] lg:w-[141px] lg:h-[43px] text-center py-1 lg:py-2 rounded-md">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;