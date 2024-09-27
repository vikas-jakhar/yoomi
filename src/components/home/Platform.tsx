"use client";
import { useEffect, useState, useRef } from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import Image from 'next/image';
import { PLATFORM_DATA } from '@/utils/Helper';
import { Tilt } from "react-next-tilt";

interface PlatformItem {
    number: string;
    text: string;
}

const Platform = () => {
    const [percentages, setPercentages] = useState<number[]>(PLATFORM_DATA.map(() => 0));
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        PLATFORM_DATA.forEach((item, index) => {
                            let start = 0;
                            const end = parseInt(item.number);
                            const increment = 1;
                            const duration = 2000;
                            const stepTime = Math.abs(Math.floor(duration / (end - start)));

                            const timer = setInterval(() => {
                                start += increment;
                                setPercentages((prevPercentages) => {
                                    const newPercentages = [...prevPercentages];
                                    newPercentages[index] = start;
                                    return newPercentages;
                                });

                                if (start >= end) {
                                    clearInterval(timer);
                                }
                            }, stepTime);
                        });

                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="lg:py-24 sm:py-20 py-16 bg-off-gray relative">
            <div className="container relative">
                <p data-aos='zoom-in' className="mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base">Platform</p>
                <PrimaryHeading text="Through " data="Our Platform" className="w-fit mx-auto text-center mt-2" />
                <PrimaryParagraph className="max-w-[710px] mx-auto text-center mt-4" data="We’ve helped our partners and patients achieve " />
                <div className="md:mt-14 sm:pt-3 md:pt-1 max-w-[861px] w-full flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between mx-auto md:gap-4">
                    {PLATFORM_DATA.map((item: PlatformItem, idx: number) => (
                        <Tilt key={idx} className="sm:w-1/2 w-full md:w-full">
                            <div className="flex justify-center px-3 mt-6 w-full md:px-0">
                                <div data-aos='zoom-in' className={`max-w-[268px] relative rounded w-full min-h-[207px] p-5 flex flex-col items-center justify-center ${idx === 0 ? "bg-light-green" : idx === 1 ? "bg-light-blue" : "bg-deep-blue"}`}>
                                    <p data-aos='zoom-in' className="font-inter font-semibold text-custom-3xl leading-custom-3xl text-white">
                                        {percentages[idx]}%
                                    </p>
                                    <p data-aos='zoom-in' className="font-inter font-normal text-white opacity-80 text-xl text-center max-w-[148px]">
                                        {item.text}
                                    </p>
                                    <Image data-aos='zoom-in' src='/assets/images/webp/white-ellpise.png' className='w-[98px] h-[88px] absolute bottom-0 right-0' alt='ellpise' width={196} height={174} priority />
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
            <Image src='/assets/images/webp/ellipse-white.png' className='absolute top-0 right-0' width={159} height={141} alt='ellipse' priority />
        </div>
    );
};

export default Platform;