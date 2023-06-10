import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="shadow-lg">
            <div className='w-3/5 mx-auto flex justify-between p-8'>
                <img src="https://deshcareer.com/logo/short-logo.png" alt="" className='w-[200px]' />
                <div className="flex items-center gap-4">
                    <NavLink className="font-bold" to='/'>Home</NavLink>
                    <p className="font-bold">Privacy Policy</p>
                    <p className="font-bold">Terms Condition</p>
                    <NavLink className="font-bold" to='/aboutUs'>About Us</NavLink>
                    <p className="font-bold">Contact Us</p>
                    <p className="font-bold">Advertise</p>
                    <button className="text-white bg-red-600 px-3 py-2 rounded">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;