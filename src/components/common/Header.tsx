"use client";
import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from '@/utils/Helper';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../custom-ui/PrimaryButton';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const ToggleOpen = () => {
        if (window.innerWidth < 768) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 768 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className="sm:pb-1.5 pb-3.5">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="w-fit relative z-20 group">
                        <Image src="/assets/images/webp/logo.png " alt="logo" className="pointer-events-none transition_slow group-hover:drop-shadow-3xl navBar max-w-[118px] w-full" width={238} height={61} priority />
                    </Link>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 md:bg-transparent absolute flex-col w-full h-screen justify-center gap-12 top-0 md:relative md:bg-none md:flex-row md:gap-11 md:h-fit md:w-fit md:left-auto transition_slow`}>
                        {HEADER_DATA.map((i, index) => (
                            <Link key={index} href={i.url} aria-label={i.text} onClick={ToggleOpen} className="font-medium navBar text-lg transition_slow text-black w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-black after:w-0 after:h-[3px] after:rounded-xl hover:after:w-full">
                                {i.text}
                            </Link>
                        ))}
                        <PrimaryButton gsapClass="" text="Get Started" className="" />
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "" : ""} w-7 h-5 relative overflow-hidden md:hidden flex z-20 cursor-pointer transition_slow`}>
                        <span className={`${open ? "opacity-0" : "top-0 right-0"} absolute w-full h-1 rounded-md bg-black transition_slow`}></span>
                        <span className={`${open ? "opacity-0" : "opacity-100 right-0"} top-1/2 -translate-y-1/2 absolute w-full h-1 rounded-md bg-black transition_slow`}></span>
                        <span className={`${open ? "after:-top-full" : ""} after:content-['Close'] text-xs after:absolute bottom-0 right-0 absolute w-full h-1 rounded-md bg-black after:duration-300 after:ease-linear`}></span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;