import React from 'react';
import profile from '../images/image.jpeg'
import {FaGithub, FaYoutube, FaInstagram, FaEnvelope} from 'react-icons/fa';

function Card()
{
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto mb-12 bg-white shadow-xl rounded-xs p-5'>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-md' src={profile} alt='profile photo'/>
                </div>
                <div className='text-center mt-5'>
                    <p className='text-xl sm:text-2xl text-gray-900'>
                        Todd Brannon
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Developer & Data Analyst
                    </p>
               
                    <div className='flex align-center justify-center mt-4'>
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
                        <span className='sr-only'>Github</span>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}

export default Card;