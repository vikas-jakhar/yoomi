"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const DynamicHeader = dynamic(() => import('../common/Header'), { ssr: false });
const DynamicHero = dynamic(() => import('./Hero'), { ssr: false });

const MainLayout: React.FC = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const formRef = useRef<HTMLDivElement | null>(null);
    const toggleFormVisibility = () => {
        setFormVisible((prev) => !prev);
    };
    useEffect(() => {
        document.body.style.overflow = isFormVisible ? "hidden" : "";
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setFormVisible(false);
            }
        };
        if (isFormVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isFormVisible]);

    return (
        <div className='sm:bg-hero-layer bg-hero-small bg-cover sm:pb-20 lg:min-h-[828px] bg-center max-w-[1920px] mx-auto relative'>
            <DynamicHeader toggleFormVisibility={toggleFormVisibility} />
            <DynamicHero isFormVisible={isFormVisible} setFormVisible={setFormVisible} formRef={formRef} />
            <Image src='/assets/images/webp/work-top-layer.webp' className='w-full hidden sm:flex pointer-events-none absolute lg:max-w-[574px] md:max-w-[420px] sm:max-w-[350px] max-w-[200px] left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 xl:bottom-[68px] 2xl:bottom-5' width={574} height={84} alt='layer' priority />
            <Image src='/assets/images/webp/work-small-layer.webp' className='w-full sm:hidden pointer-events-none absolute lg:max-w-[574px] md:max-w-[420px] sm:max-w-[350px] max-w-[200px] left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 xl:bottom-[68px] 2xl:bottom-5' width={574} height={84} alt='layer' priority />
        </div>
    );
};

export default MainLayout;