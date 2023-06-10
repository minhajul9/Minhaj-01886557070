import Navbar from './shared/Navbar';
import { CiMail } from "react-icons/ci";

const Home = () => {
    return (
        <div className='w-3/5 mx-auto py-16 space-y-3'>
            <h2 className='text-[3.2rem] font-bold w-[730px]'>Get Smarter about your <br /> career</h2>
            <p>Get the <span className='font-bold'>5-minute newsletter</span> keeping about smart career</p>
            <div className='flex items-center w-[730px] justify-between border shadow px-4 py-4 rounded-lg'>
                <CiMail />
                <input className='w-3/5' type="text" placeholder='Your E-mail address' />
                <button className="text-white text-xl bg-red-600 px-3 py-2 rounded">Join Free</button>
            </div>
            <p className='w-[730px]'>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
    );
};

export default Home;