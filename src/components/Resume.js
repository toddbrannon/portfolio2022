import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

function Resume() {
    return(
        <div className='max-w-4xl mt-4 mx-auto'>
            <p className='text-2xl text-slate-600 md:text-4xl font-bold text-center'>
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