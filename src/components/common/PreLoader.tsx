"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PreLoader: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [hide, setHide] = useState<boolean>(false);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const timer = setTimeout(() => {
            setHide(true);
        }, 1300);
        const cleanupTimer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center">
            <div className={`min-h-screen w-1/2 bg-deep-blue z-[100] fixed top-0 left-0 transition-transform duration-500 ${hide ? '-translate-x-full' : 'translate-x-0'}`}>
            </div>
            <div className={`relative w-[250px] z-[200] animate-bounce flex flex-col sm:flex-row gap-10 items-center justify-center ${hide ? 'opacity-0' : 'opacity-100'}`}>
                <div className='items-center justify-end relative w-full flex mx-auto'>
                    <Image
                        src="/assets/images/webp/sign-logo.webp"
                        alt='logo'
                        width={106}
                        height={200}
                        className='w-full pointer-events-none z-50 max-w-[300px] absolute top-0 animate-bounce'
                        priority
                    />
                </div>
            </div>
            <div className={`min-h-screen w-1/2 bg-deep-blue z-[100] fixed top-0 right-0 transition-transform duration-500 ${hide ? 'translate-x-full' : 'translate-x-0'}`}>
            </div>
        </div>
    );
}

export default PreLoader;