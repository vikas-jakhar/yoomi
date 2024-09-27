"use client";
import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from '@/utils/Helper';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../custom-ui/PrimaryButton';

interface HeaderProps {
    toggleFormVisibility: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleFormVisibility }) => {
    const [open, setOpen] = useState(false);
    const ToggleOpen = () => {
        if (window.innerWidth < 768) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 768) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="sm:pb-1.5 pb-3.5 pt-[26px]">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="w-fit relative z-20">
                        <Image
                            src="/assets/images/webp/logo.webp"
                            alt="logo"
                            className="pointer-events-none navBar max-w-[118px] w-full"
                            width={238}
                            height={61}
                            priority
                        />
                    </Link>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 md:bg-transparent absolute flex-col w-full h-screen justify-center gap-7 top-0 md:relative md:bg-none md:flex-row md:gap-11 md:h-fit md:w-fit md:left-auto transition_slow`}>
                        {HEADER_DATA.map((item, index) => (
                            <Link key={index} href={item.url} aria-label={item.text} onClick={ToggleOpen} className="font-medium navBar text-lg transition_slow text-black w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-black after:w-0 after:h-[3px] after:rounded-xl hover:after:w-full">
                                {item.text}
                            </Link>
                        ))}
                        <PrimaryButton text="Get Started" onClick={toggleFormVisibility} /> {/* Call the function to show the form */}
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "w-9" : "w-7"} h-5 relative overflow-hidden md:hidden flex z-20 cursor-pointer transition_slow`}>
                        <span className={`${open ? "opacity-0" : "top-0 right-0"} absolute w-full h-1 rounded-md bg-black transition_slow`}></span>
                        <span className={`${open ? "opacity-0" : "opacity-100 right-0"} top-1/2 -translate-y-1/2 absolute w-full h-1 rounded-md bg-black transition_slow`}></span>
                        <span className={`${open ? "after:-top-[18px]" : "after:top-2"} after:content-['Close'] after:font-inter after:font-bold text-xs after:absolute bottom-0 right-0 absolute w-full h-1 rounded-md bg-black after:duration-300 after:ease-linear`}></span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
