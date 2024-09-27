"use client";
import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [scrollPercent, setScrollPercent] = useState<string>('0');
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const toggleVisible = () => {
        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercent = ((scrolled / totalHeight) * 100).toFixed(0);
        if (scrolled > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        setScrollPercent(scrolledPercent);
    };
    const checkScreenWidth = () => {
        setIsLargeScreen(window.innerWidth >= 1920);
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', checkScreenWidth);
        checkScreenWidth();
        return () => {
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <button
            onClick={Scroll}
            className="bg-white border border-dark-green group place-items-center xl:w-16 xl:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full fixed bottom-[1.5%] sm:bottom-[2%] md:bottom-[2%] cursor-pointer shadow-6xl duration-300 ease-linear z-30"
            style={{
                display: visible ? 'grid' : 'none',
                right: isLargeScreen ? 'calc((100vw - 1920px) / 2 + 30px)' : '1.5%',
            }}
        >
            <span className="sm:text-sm text-xs md:text-base font-bold duration-300 ease-linear font-inter">
                {scrollPercent}%
            </span>
        </button>
    );
};

export default ScrollToTop;