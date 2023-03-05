import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

function Resume() {
    return(
        <div className='max-w-full mt-4 mx-auto p-20 bg-indigo-200'>
            <p className='text-4xl md:text-4xl sm:text-5xl text-slate-600 text-center py-4 font-extrabold'>
                My resume.
            </p>
            <div className="flex flex-wrap justify-center pt-2">
                
                
            </div>
            
            
            <ScrollIntoView selector="">
                <div className='mx-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
                </div>
            </ScrollIntoView>
        </div>
        
    )
}

export default Resume;