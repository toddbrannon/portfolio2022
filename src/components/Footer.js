import React from 'react';
import { brand, Copyright } from '../constants';
import {FaGithub, FaYoutube, FaInstagram, FaEnvelope, FaReact} from 'react-icons/fa';

function Footer(){
    return(
        <div className='py-5 border-t-3/2'>
            <div className='flex align-center justify-center mt-4'>
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white' href="https://github.com/toddbrannon" target="_blank">
                            <FaGithub />
                        </a>
                        <span className='sr-only'>Github</span>

                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white' href="https://www.youtube.com/channel/UCe46QOYCVI2LV6rQsHIKXHQ" target="_blank">
                            <FaYoutube />
                        </a>
                        <span className='sr-only'>YouTube</span>

                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-purple-600 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full hover:text-white' href="https://www.instagram.com/trusponsesolutions/" target="_blank">
                            <FaInstagram />
                        </a>
                        <span className='sr-only'>Instagram</span>
                        
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white' href="mailto:your-email@example.com?subject=Website%20Inquiry&body=Hello,%0D%0A%0D%0AThis%20email%20originates%20from%20the%20website.%0D%0A%0D%0ARegards,%0D%0AJohn%20Doe&headers=X-Website-Source: Portfolio2022" target="_blank">

                            <FaEnvelope />
                        </a>
                        <span className='sr-only'>Github</span>
                    </div>
            <div className='flex text-center justify-center mt-4'>
                <p className='text-black mb-4'>
                    Made using <span className='m-2 p-2 text-xl text-blue-500 rounded-full flex justify-center'><FaReact /></span> © { Copyright } <a href="#" className="hover:underline">{brand}</a>. All Rights Reserved.
                </p>
                
            </div>
        </div>
        
    )
}

export default Footer;