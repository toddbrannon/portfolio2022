import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

export default function ContactMe(){
    return(
        <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
            <p className='text-2xl text-slate-600 text-center sm:text-4xl pt-4 font-bold'>
                Communicalogically.
            </p>
            <a href="mailto: todd@toddbrannon.com">
                <span className='mt-10 inline-block w-auto bg-slate-900 font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
                    <div className='flex flex-row items-center'>
                        <span className='mr-3'>Reach out</span>
                        <FaArrowRight color='white' />
                    </div>
                </span>   
            </a>
        </div>
    )
}