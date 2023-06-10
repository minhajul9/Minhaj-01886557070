import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0F0D32] text-[#8c94b8] px-4 py-8'>
            <div className='text-2xl text-white flex justify-center gap-8 mb-8'>
                <CiFacebook className='border border-white' />
                <FaYoutube className='border border-white' />
                <FaLinkedinIn className='border border-white' />
            </div>
            <div className='md:w-3/5 mx-auto mb-4 grid grid-cols-2 md:grid-cols-3'>
                <div className='text-center md:text-left col-span-2 md:col-span-1'>
                    <img src="https://deshcareer.com/logo/short-logo.png" alt="" className='w-[200px]' />
                    <p className='w-[344px] mb-8'>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM.</p>
                </div>
                <div className='text-center w-[100px] md:w-auto'>
                    <h3 className='text-white text-2xl font-semibold mb-12 '>Privacy and Terms</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Conditions</p>
                    <p>FAQ</p>
                </div>
                <div className='text-right'>
                    <h3 className='text-white text-2xl font-semibold mb-12'>Support</h3>
                    <p>Affiliate Link</p>
                    <p>Contact Us</p>
                    <p>Advertise with us</p>
                </div>
            </div>
            <hr className='border-white mx-8' />
            <div className='md:w-3/5 mx-auto text-white flex flex-wrap justify-between'>
                <p><small>© 2023 Newsletter E-mail Service: All Copy right reserved</small></p>
                <p>Terms &nbsp;&nbsp; Cookie &nbsp;&nbsp; Policy &nbsp;&nbsp; Terms &nbsp;&nbsp; Privacy</p>
            </div>

        </div>
    );
};

export default Footer;