import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const GetInTouch = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const initialValues = {name: "", email: "", message: ""}
    const [formValues, setFormValues]=useState(initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value })
        console.log(formValues)
    };
    
    const [formErrors, setFormErrors]=useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const onChange = () => {}
    const form = useRef();
    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY, REACT_APP_RECAPTCHA_SECRET_KEY } = process.env

    

    const sendEmail = (e) => {
      e.preventDefault();
    setFormErrors(validate(formValues))
    
    emailjs
        .sendForm(
            `${REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            form.current, 
            `${REACT_APP_EMAILJS_PUBLIC_KEY}`
        )
      .then((result) => {
        setIsSubmit(true)
        console.log("Result " + result.text);
        console.log("message sent")
        console.log(formValues)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
          console.log(error.text);
      });
    };

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!values.name){
            errors.name = "Name is required!"
        }
        if (!values.email){
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email"
        }
        if (!values.message){
            errors.message = "A message is required!"
        }
        return errors;
    }

    return (
        
        <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">Your message has been sent!</div>) : 
                            (<pre className="text-white"></pre>)}
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
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        Keller, TX 76244
                                    </div>
                                </div>
        
                                
        
                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        todd@toddbrannon.com
                                    </div>
                                </div>
                            </div>

                            
                            <form class="p-6 pt-0 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                                <p className="text-red-600 mb-0 mt-2">{ formErrors.name }</p>
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" value={formValues.name} onChange={handleChange} placeholder="Full Name" class="w-100 mt-0 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>
        
                                <p className="text-red-600 mb-0 mt-2">{ formErrors.email }</p>
                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden">Email</label>
                                    <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} placeholder="Email" class="w-100 mt-0 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>
        
                                <p className="text-red-600 mb-0 mt-2">{ formErrors.message }</p>
                                <div class="flex flex-col mt-2">
                                    <label for="message" class="hidden">Message</label>
                                    <textarea name="message" id="message" value={formValues.message} onChange={handleChange} placeholder="Message" rows="3" class="w-100 mt-0 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold dark:text-gray-200 focus:border-indigo-500 focus:outline-none"/>
                                </div>
                                <p className="text-red-600 mb-0 mt-2">{ formErrors.recaptcha }</p>
                                <div className="p-4 pb-0">
                                    <ReCAPTCHA
                                    sitekey="6LcLo9UkAAAAADhXnDkKS6anPqlq3Qka53iM3HYR"
                                    data-callback="recaptchaCallback"
                                    onChange={onChange}
                                    />,
                                </div>

                                <button type="submit" value="send" className="mt-0 inline-block w-auto bg-slate-900 dark:bg-green-500 font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-500 transition ease-in-out duration-300">
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