import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = <>
        <li><NavLink className="font-bold" to='/'>Home</NavLink></li>
        <li><p className="font-bold">Privacy Policy</p></li>
        <li><p className="font-bold">Terms Condition</p></li>
        <li><NavLink className="font-bold" to='/aboutUs'>About Us</NavLink></li>
        <li><p className="font-bold">Contact Us</p></li>
        <li><p className="font-bold">Advertise</p></li>
        <li><button className="text-white bg-red-600 px-3 py-2 rounded">Join Now</button></li>
    </>

    return (
        <div className="shadow-lg py-8">
            <div className="navbar md:w-3/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                    <img src="https://deshcareer.com/logo/short-logo.png" alt="" className='w-[200px]' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;