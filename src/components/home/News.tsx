"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import PrimaryButton from '../custom-ui/PrimaryButton'

const News = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 3000);
    };
    return (
        <div className='sm:pt-12 pt-5 pb-px relative z-10' id='news'>
            <div className="container">
                <div data-aos='zoom-in' className="bg-deep-blue w-full rounded-[32px] p-5 sm:p-16 md:p-20 relative">
                    <div className="ml-1 relative z-10">
                        <Image data-aos='zoom-in' src='/assets/images/webp/sign-logo.webp' className='max-w-[228px] w-full' alt='logo' width={458} height={110} priority />
                        <p className='lg:mt-7 mt-5 font-plus font-normal text-white text-2xl md:text-3xl'>Sign Up to Join <span className='font-plus font-semibold'>Our Newsletter</span></p>
                        <form onSubmit={handleSubmit} data-aos='zoom-in' id='newsEmail' method="get" className='max-w-[428px] w-full p-1.5 bg-white rounded flex justify-between items-center mt-8 lg:mt-12 shadow-6xl'>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" placeholder='Enter Your Email' className='font-medium font-inter placeholder:text-dark-blue text-dark-blue text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full' required />
                            <PrimaryButton text='Get Started' />
                        </form>
                    </div>
                    <Image src='/assets/images/webp/men-img.webp' className='sm:max-w-[300px] max-w-[200px] z-[1] w-full top-1/2 -translate-y-1/2 absolute right-2 sm:right-[103px] opacity-70 lg:opacity-100' alt='men-img' width={601} height={644} priority />
                    <Image src='/assets/images/webp/sign-ellipse.webp' className='absolute bottom-0 right-0' width={200} height={170} alt='ellipse' priority />
                </div>
                <div className={`w-[200px] z-[700] place-items-center transition_slow h-12 bg-white shadow-3xl fixed bottom-10 flex justify-center items-center ${isSubmitted ? "right-10" : "-right-full"}`}>
                    <span className='font-inter capitalize text-base'>Submit successfully</span>
                </div>
            </div>
        </div>
    )
}

export default News