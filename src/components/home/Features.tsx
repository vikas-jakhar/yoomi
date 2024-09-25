"use client";
import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const Features = () => {
    return (
        <div className='py-24'>
            <div className="container">
                <p className='mx-auto w-fit text-deep-blue font-inter font-medium text-base'>Features</p>
                <PrimaryHeading text='Explore Our ' data='Amazing Features' className='w-fit mx-auto text-center mt-2' />
                <PrimaryParagraph className='max-w-[710px] mx-auto text-center mt-2.5' data='Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process' />
                <div className="mt-14 flex justify-between items-center shadow-4xl rounded-[32px] bg-white w-full py-[61px]">
                    <div className="max-w-[468px] w-full"></div>
                    <div className="block relative overflow-hidden max-w-[569px] w-full">
                        <Swiper
                            spaceBetween={35}
                            slidesPerView={1.2}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {[...Array(2)].map((_, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="overflow-hidden min-h-[331px] relative max-w-[460px] w-full">
                                        <Image src={`${idx === 0 ? '/assets/images/webp/swiper-image.png' : '/assets/images/webp/slider-img.png'}`} className='w-full h-full' alt='swiper-image' width={461} height={332} priority />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
