import React from 'react';
import {FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiMicrosoftsqlserver, SiPython, SiMicrosoftaccess, SiMicrosoftexcel, SiMicrosoftazure} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {DiBootstrap} from 'react-icons/di';


function Skills()
{
    return(
        <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
            <p className='text-2xl text-slate-600 text-center sm:text-4xl pt-4 font-bold'>
                Technologically.
            </p>
        <div className="flex flex-wrap justify-center pt-2">
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiJavascript className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>JavaScript</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaNodeJs className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Node JS</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiReact className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>React</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMongodb className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>MongoDB</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <GrMysql className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>MySQL</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftsqlserver className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>SQL Server</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiPython className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Python</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <DiBootstrap className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Bootstrap</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiTailwindcss className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Tailwind CSS</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftaccess className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Access | VBA</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftexcel className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Excel | VBA</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiMicrosoftazure className="mx-auto text-4xl text-orange-500"/>
                <p className='mt-6 text-xl sm:text-xl font-semibold text-center text-slate-600'>Azure</p>
            </div>
        </div>
        </div>
    )
}

export default Skills;