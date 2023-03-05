import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import resume from '../images/ResumeImg.png'
import {FaChevronDown} from 'react-icons/fa';

function Resume() {
    return(
        <div className='max-w-full mt-4 mx-auto p-20 bg-indigo-200'>
            <p className='text-4xl md:text-4xl sm:text-5xl text-slate-600 text-center py-4 font-extrabold'>
                My resume.
            </p>
            <div className="flex flex-wrap justify-center pt-2">
            <div className="py-12">
                    <a href="https://toddbrannon.github.io/ResumeWebsite/" target="_blank">
                        <img className='w-80 mx-auto shadow-xl drop-shadow-md' src={resume} alt='resume photo'/>
                    </a>  
                    <div className="pt-8">
                        <a className='text-xl text-blue-800 text-center' href="https://toddbrannon.github.io/ResumeWebsite/" target="_blank">Click here to view</a>
                    </div>
                    
                </div>    
                
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