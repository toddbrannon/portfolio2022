import React from 'react';
import {FaGithub, FaYoutube, FaInstagram, FaEnvelope, FaReact} from 'react-icons/fa';
import CopyrightYear from 'react-copyright-year';

function Footer(){
    return(
        <div className='py-5 border-t-3/2 bg-indigo-200'>
            <div className='flex justify-center mt-4'>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white' href="">
                    <FaGithub />
                </a>
                <span className='sr-only'>Github</span>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white' href="">
                    <FaYoutube />
                </a>
                <span className='sr-only'>YouTube</span>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-purple-600 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full hover:text-white' href="">
                    <FaInstagram />
                </a>
                <span className='sr-only'>Instagram</span>
                
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white' href="">
                    <FaEnvelope />
                </a>
                <span className='sr-only'>Email</span>
            </div>
            <div className='flex text-center justify-center mt-4'>
                <p className='text-black mb-4'>
                    Made using <span className='m-2 p-2 text-xl text-blue-500 rounded-full flex justify-center'><FaReact /></span> 
                    <p id="copyrightYear"><CopyrightYear/> Todd Brannon All Rights Reserved</p>
                </p>
            </div>
        </div>
    )
}

export default Footer;