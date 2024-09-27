"use client";
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import Image from 'next/image';
import { IMAGES_DATA } from '@/utils/Helper';
import { Tilt } from "react-next-tilt";

const Partners = () => {
    return (
        <div className='sm:py-20 py-16'>
            <div className="container mt-2">
                <p data-aos='zoom-in' className="mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base">Partners</p>
                <PrimaryHeading text="Recognized by Leading " data="Healthcare Institutions" className="w-fit mx-auto max-w-[684px] text-center mt-2" />
                <div data-aos='zoom-in' className="flex flex-wrap flex-row -mx-3 mt-4 lg:mt-9 justify-center">
                    {IMAGES_DATA.map((items, idx) => (
                        <Tilt className='lg:w-[20%] md:w-3/12 sm:w-4/12 w-1/2' key={idx}>
                            <div className="px-3 flex justify-center w-full">
                                <div data-aos='zoom-in' className="max-w-[207px] mt-6 lg:mt-0 min-h-[137px] grid place-items-center shadow-5xl border w-full">
                                    <Image data-aos='zoom-in' src={items.img} className={`w-full ${idx === 0 || idx === 4 ? "max-w-[92px]" : idx === 1 ? "max-w-[80px]" : idx === 2 ? "max-w-[96px]" : "max-w-[77px]"}`} alt='logo' width={100} height={100} priority />
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners