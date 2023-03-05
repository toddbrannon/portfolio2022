import React, { useRef } from 'react';
import {FaArrowRight} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'

const GetInTouch = () => {
    const form = useRef();
    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            `${REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            form.current, 
            `${REACT_APP_EMAILJS_PUBLIC_KEY}`
        )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
        
        <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-6 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>
        
                                <div class="flex items-center mt-8 pt-4 text-gray-600 dark:text-gray-400">
                                    <MdOutlineLocationOn size="2rem"/>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        Keller, TX 76244
                                    </div>
                                </div>
                                
        
                                
        
                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <FaRegEnvelope size="2rem"/>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        todd@toddbrannon.com
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <FaGithub size="2rem"/>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        https://github.com/toddbrannon
                                    </div>
                                </div>
                            </div>
        
                            <form class="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="name" name="user_name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>
        
                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden">Email</label>
                                    <input type="email" name="user_email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>
        
                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden">Message</label>
                                    <textarea name="message" id="message" placeholder="Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <button type="submit" value="send" className="mt-10 inline-block w-auto bg-slate-900 dark:bg-green-500 font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-500 transition ease-in-out duration-300">
                                    Submit
                                </button>
        

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    
    )
};

export default GetInTouch;
