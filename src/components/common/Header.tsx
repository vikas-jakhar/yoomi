"use client";
import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from '@/utils/Helper';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../custom-ui/PrimaryButton';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const ToggleOpen = () => {
        if (window.innerWidth < 640) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 640 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className="sm:pb-6 pb-[14px]">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="w-fit relative z-20 group">
                        <Image src="/assets/images/webp/logo.png " alt="logo" className="pointer-events-none transition_slow group-hover:drop-shadow-3xl navBar max-w-[118px] w-full" width={238} height={61} priority />
                    </Link>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 sm:bg-transparent absolute flex-col w-full h-screen pt-[108px] sm:pt-0 gap-12 top-0 sm:relative sm:bg-none sm:flex-row sm:gap-11 sm:h-fit sm:w-fit sm:left-auto transition_slow`}>
                        {HEADER_DATA.map((i, index) => (
                            <Link key={index} href={i.url} aria-label={i.text} onClick={ToggleOpen} className="font-medium navBar text-lg transition_slow text-black w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-black after:w-0 after:h-[3px] after:rounded-xl hover:after:w-full">
                                {i.text}
                            </Link>
                        ))}
                        <PrimaryButton gsapClass="" hoverClass='' text="Get Started" className="" />
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "shadow-5xl h-6" : ""} w-6 h-4 rounded-full relative sm:hidden flex z-20 cursor-pointer transition_slow`}>
                        <div className="">
                            <span className={`${open ? "top-[45.8%] rotate-45 left-1/2 -translate-x-1/2" : "top-0 right-0"} absolute w-[18px] h-1 rounded-md bg-offBlack transition_slow`}></span>
                            <span className={`${open ? "hidden" : "top-0"} left-0 absolute w-1 h-1 rounded-full bg-offBlack transition_slow`}></span>
                        </div>
                        <div className="">
                            <span className={`${open ? "opacity-0" : "opacity-100 right-0"} top-1/2 -translate-y-1/2 absolute w-[18px] h-1 rounded-md bg-offBlack transition_slow`}></span>
                            <span className={`${open ? "hidden" : ""} left-0 top-1/2 -translate-y-1/2 absolute w-1 h-1 rounded-full bg-offBlack transition_slow`}></span>
                        </div>
                        <div className="">
                            <span className={`${open ? "top-[45.8%] -rotate-45 left-1/2 -translate-x-1/2" : "bottom-0 right-0"} absolute w-[18px] h-1 rounded-md bg-offBlack transition_slow`}></span>
                            <span className={`${open ? "hidden" : "bottom-0"} left-0 absolute w-1 h-1 rounded-full bg-offBlack transition_slow`}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;