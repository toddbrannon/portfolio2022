import React from 'react';
import {FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiMicrosoftsqlserver, SiPython, SiMicrosoftaccess, SiMicrosoftexcel, SiMicrosoftazure} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';
import {DiBootstrap} from 'react-icons/di';


function Skills()
{
    return(
        <div className='max-w-4xl mx-auto justify-center py-0' id="tech">
            <p className='text-2xl text-slate-600 text-center sm:text-4xl pt-4 font-bold'>
               Tech stack.
            </p>
        <div className="flex flex-wrap justify-center pt-6">
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiJavascript className="mx-auto text-4xl text-yellow-400"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>JavaScript</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaNodeJs className="mx-auto text-4xl text-green-700"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Node JS</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiReact className="mx-auto text-4xl text-blue-400"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>React</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMongodb className="mx-auto text-4xl text-green-600"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>MongoDB</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <GrMysql className="mx-auto text-4xl text-cyan-800"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>MySQL</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftsqlserver className="mx-auto text-4xl text-red-700"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>SQL Server</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiPython className="mx-auto text-4xl text-cyan-800"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Python</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftaccess className="mx-auto text-4xl text-red-800"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Access | VBA</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftexcel className="mx-auto text-4xl text-green-800"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Excel | VBA</p>
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

export default Skills;