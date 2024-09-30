"use client";
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import PrimaryHeading from '../custom-ui/PrimaryHeading';

const Sports = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="py-3.5">
            <div className="container">
                <p data-aos='zoom-in' className="mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base">Know More</p>
                <PrimaryHeading text="And Used by the Biggest " data="Figures in Sports and Rehab" className="w-fit mx-auto max-w-[615px] text-center mt-4 lg:mb-14 md:mb-10 mb-8" />
                <div data-aos='zoom-in' className='max-w-[946px] w-full mx-auto'>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2"
                    >
                        {[...Array(4)].map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="max-w-[946px] rounded-2xl w-full overflow-hidden">
                                    <Image src={`${idx === 0 ? "/assets/images/webp/sports-img.webp" : "/assets/images/webp/swiper-women-img.webp"}`} className='w-full max-h-[156px] sm:max-h-[296px] md:max-h-[360px] lg:max-h-[473px] h-full' alt='sports' width={1892} height={946} priority />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div data-aos='zoom-in' className="max-w-[723px] mx-auto md:-ml-2.5 lg:ml-auto md:mt-5 lg:pt-0.5">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={22}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                640: {
                                    slidesPerView: 2.9,
                                    spaceBetween: 22,
                                },
                                768: {
                                    slidesPerView: 3.9,
                                },
                            }}
                        >
                            {[...Array(6)].map((_, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="sm:max-w-[152px] rounded w-full overflow-hidden hover:scale-110 transition_slow cursor-pointer">
                                        <Image src={`${idx === 0 ? "/assets/images/webp/sports-img.webp" : "/assets/images/webp/swiper-women-img.webp"}`} className='w-full min-h-[70px] sm:min-h-[114px] h-full' alt='sports' width={1892} height={946} priority />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sports;