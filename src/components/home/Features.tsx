"use client";
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Icon from '../common/Icons';
import { LIBRARY_DATA } from '@/utils/Helper';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PrimaryButton from '../custom-ui/PrimaryButton';

const Features = () => {
    return (
        <div className='lg:py-24 sm:py-20 py-16'>
            <div className="container">
                <p className='mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base'>Features</p>
                <PrimaryHeading text='Explore Our ' data='Amazing Features' className='w-fit mx-auto text-center mt-2' />
                <PrimaryParagraph className='max-w-[710px] mx-auto text-center mt-2.5' data='Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process' />
                <div className="lg:mt-14 flex flex-col lg:flex-row pl-2 sm:pl-7 gap-5 justify-between items-center shadow-4xl rounded-[32px] bg-white w-full py-10 sm:py-[61px]">
                    <div className="lg:max-w-[468px] w-full ml-0.5 pr-2 sm:pr-7 lg:pr-0">
                        <p className='text-deep-blue font-inter uppercase font-medium text-sm sm:text-base'>Library</p>
                        <p className='font-plus font-normal text-xl sm:text-custom-lg mt-2 mb-5'>Extensive Exercise <span className='font-plus font-semibold'>Library</span></p>
                        {LIBRARY_DATA.map((items, idx) => (
                            <div key={idx} className={`flex items-center gap-3.5 ${idx === 1 ? "mt-2.5 mb-2" : "lg:pr-5"}`}>
                                <Icon className='m-1' iconName='tickIcon' />
                                <PrimaryParagraph data={items.text} />
                            </div>
                        ))}
                        <PrimaryButton className='sm:mt-9 mt-5 lg:px-[18px] lg:py-3.5' text='View the Library' />
                    </div>
                    <div className="block sm:mt-10 mt-4 ml-auto pt-8 sm:pt-12 relative overflow-hidden lg:max-w-[569px] w-full">
                        <Swiper
                            spaceBetween={35}
                            slidesPerView={1.2}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Navigation]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 35,
                                },
                                1024: {
                                    slidesPerView: 1.2,
                                },
                            }}
                        >
                            {[...Array(4)].map((_, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="overflow-hidden group rounded xl:max-h-[331px] lg:max-h-[273px] relative max-h-[181px] sm:max-h-[323px] max-w-[460px] w-full">
                                        <Image src={`${idx === 0 || idx === 2 ? '/assets/images/webp/swiper-image.png' : '/assets/images/webp/slider-img.png'}`} className='w-full h-full group-hover:scale-105 transition_slow' alt='swiper-image' width={461} height={332} priority />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex items-center mt-3.5 gap-2.5">
                            <Icon className="swiper-button-prev transition_slow group hover:bg-deep-blue hover:border-transparent cursor-pointer border border-black rounded-full" iconName='leftArrow' />
                            <Icon className="swiper-button-next transition_slow group hover:bg-white cursor-pointer border border-deep-blue rounded-full bg-deep-blue" iconName='rightArrow' />
                        </div>
                        <div className="bg-light-blue max-w-[520px] h-[150px] sm:h-[262px] absolute top-0 -right-3 w-full rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features