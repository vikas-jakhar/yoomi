"use client";
import React, { useEffect, useRef, useState } from 'react';
import Header from '../common/Header';
import Hero from '../home/Hero';

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
        <div className='bg-hero-layer bg-cover pb-20 lg:min-h-[828px] bg-center'>
            <Header toggleFormVisibility={toggleFormVisibility} />
            <Hero isFormVisible={isFormVisible} setFormVisible={setFormVisible} formRef={formRef} />
        </div>
    );
};

export default MainLayout;
