import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

function Experience() {
    return(
        <div className='max-w-4xl mt-4 mx-auto p-10'>
            <p className='text-2xl text-slate-600 md:text-4xl font-bold text-center py-4'>
                My experience.
            </p>
            <div className="flex flex-wrap justify-center pt-2">
                <div class="w-60 bg-white shadow rounded m-4">
                    <h2 className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4'>Willrich Precision Instrument</h2>
                    <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                    Enterprise order management system - Microsoft Access
                    </p>
                </div>
                <div class="w-60 bg-white shadow rounded m-4">
                    <h2 className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4'>Estate Sale Manager</h2>
                    <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4 p-4'>
                    Estate Sale Management System - Node.js | Express | MongoDB | MySQL
                    </p>
                </div>
                <div class="w-60 bg-white shadow rounded m-4">
                    <h2 className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4'>Analytics Project</h2>
                    <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4 p-4'>
                    Create an analytics project in Tableau
                    </p>
                </div>
                <div class="w-60 bg-white shadow rounded m-4">
                    <h2 className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4'>Using Python to Manage Data</h2>
                    <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4 p-4'>
                    Create an analytics project in Excel where you use Python
                    </p>
                </div>
                <div class="w-60 bg-white shadow rounded m-4">
                    <h2 className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4'>LCR Capital Partners project</h2>
                    <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4 p-4'>
                    Demo the LCR Capital database and Excel report
                    </p>
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

export default Experience;