import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

function About() {
    return(
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-slate-600 md:text-4xl font-bold text-center'>
                Personalogically.
            </p>
            <p className='text-base md:text-2xl text-center text-gray-600 leading-relaxed mt-4'>
                I am a self-taught MERN developer with an interest in full-stack projects. In 2022, I am growing my Web 3.0 development skills, turning my time an attention to various blockchain, dapp, and defi projects!
            </p>
            <ScrollIntoView selector="">
                <div className='mx-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
                </div>
            </ScrollIntoView>
        </div>
        
    )
}

export default About;