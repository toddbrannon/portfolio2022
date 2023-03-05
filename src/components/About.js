import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa';

function About() {
    return(
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-slate-600 md:text-4xl font-bold text-center'>
                About me.
            </p>
            <p className='text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 pt-2'>
               
                Hello! My name is Todd and I enjoy creating things that live on computers and on the internet. My interest in programming started
                back in about 2011 just a little over a year after making the pivot out of a healthcare role I had been in for the previous 16 years. That's
                about the time I discovered what an Excel macro was. Since then, I have developed some pretty cool things for companies like HCA Healthcare,
                AutoNation, Willrich Precision Instrument, LCR Capital Partners, and others.

                Turns out discovering the macro recorder in Microsoft Excel in 2011 would end up launching me down the path of developing solutions for a variety
                of businesses across various industries.

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