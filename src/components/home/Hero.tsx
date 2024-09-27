"use client";
import React, { useState, RefObject } from 'react';
import PrimaryButton from '../custom-ui/PrimaryButton';
import Image from 'next/image';
interface HeroProps {
    isFormVisible: boolean;
    setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
    formRef: RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ isFormVisible, setFormVisible, formRef }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
            setPassword('');
            setFormVisible(false);
        }, 3000);
    };

    return (
        <div className='pt-px pb-20'>
            <div className="container relative z-[1] pb-20 pt-8 sm:pt-16 lg:pt-24 mt-0.5">
                <h2 className='font-plus max-w-[823px] w-full mx-auto text-center relative text-3xl sm:text-4xl md:text-custom-xl lg:text-custom-2xl md:leading-custom-xl lg:leading-custom-2xl font-extrabold'>
                    Next Generation <span className='font-plus font-normal'>Patient Engagement and RTM Solution</span>
                    <Image alt="logo" src='/assets/images/webp/star-icon.webp'
                        className="pointer-events-none absolute bottom-0 hidden lg:flex lg:-right-2"
                        width={40}
                        height={40}
                        priority />
                </h2>
                <p className='w-fit mx-auto text-center font-inter font-normal text-lg sm:text-2xl opacity-70 mt-4'>Industry leading AI motion-tracking technology</p>
                <form id='fromEmail' onSubmit={handleSubmit} method="get" className='max-w-[428px] mx-auto w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <PrimaryButton text='Get Started' />
                </form>
                <div className={`w-[200px] z-50 place-items-center transition_slow h-12 bg-white shadow-3xl fixed bottom-10 flex justify-center items-center ${isSubmitted ? "right-10" : "-right-full"}`}>
                    <span className='font-inter capitalize text-base'>Submit successfully</span>
                </div>
                {isFormVisible && (
                    <div ref={formRef} className="max-w-[500px] w-full z-50 px-5 py-10 bg-white rounded-lg shadow-3xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <form id='emailForm' onSubmit={handleSubmit} method="get" className='mx-auto w-full flex flex-col gap-5 justify-between items-center'>
                            <input
                                type="email"
                                placeholder='Enter Your Email'
                                className='font-medium font-inter placeholder:text-black border-2 rounded text-base opacity-70 p-2 outline-none max-w-[392px] w-full'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type='password'
                                placeholder='Enter Your Password'
                                className='font-medium font-inter placeholder:text-black border-2 rounded text-base opacity-70 p-2 outline-none max-w-[392px] w-full'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <PrimaryButton text='Get Started' />
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
