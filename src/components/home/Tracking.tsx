import PrimaryButton from '../custom-ui/PrimaryButton'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { TRACKING_DATA } from '@/utils/Helper';
import Icon from '../common/Icons';
import Image from 'next/image';

const Tracking = () => {
    return (
        <div className='py-px relative'>
            <div className="container relative z-10">
                <div data-aos='zoom-in' className="justify-between flex-col-reverse lg:flex-row gap-10 flex items-center shadow-4xl rounded-[32px] bg-white w-full py-5
                 md:py-10 lg:py-14 px-2.5 sm:px-7 lg:px-[18px]">
                    <div className="sm:max-w-[552px] max-w-[350px] w-full flex justify-center items-end relative sm:ml-3.5">
                        <Image data-aos='zoom-in' src='/assets/images/webp/scapular.webp' className='max-w-[534px] w-full mt-5 pointer-events-none' width={1066} height={643} alt='scapular' priority />
                        <Image data-aos='zoom-in' src='/assets/images/webp/circle-img.webp' className='sm:max-w-[120px] max-w-[60px] w-full absolute top-2.5 z-10 right-0 pointer-events-none' width={243} height={243} alt='circle-img' priority />
                        <Image data-aos='zoom-in' src='/assets/images/webp/women-img.webp' className='sm:max-w-[259px] max-w-[140px] w-full absolute top-0 sm:-top-5 z-10 -left-2 sm:-left-5 pointer-events-none' width={518} height={334} alt='circle-img' priority />
                    </div>
                    <div className="lg:max-w-[468px] w-full">
                        <p data-aos='zoom-in' className='text-deep-blue font-inter text-center lg:text-left uppercase font-medium text-sm sm:text-base'>TRACKING</p>
                        <p data-aos='zoom-in' className='font-plus font-normal text-center lg:text-left text-xl md:text-3xl xl:text-custom-lg mt-2'>Cutting Edge Motion <span className='font-plus font-semibold'>Tracking/</span></p>
                        <p data-aos='zoom-in' className='font-plus font-semibold text-center lg:text-left text-xl md:text-3xl xl:text-custom-lg mb-5 xl:mt-2'>Feedback</p>
                        {TRACKING_DATA.map((items, idx) => (
                            <div key={idx} className={`flex items-center gap-3.5 lg:max-w-[458px] w-full ${idx === 0 ? "pr-5" : "mt-2.5"}`}>
                                <Icon className='lg:m-1' iconName='tickIcon' />
                                <PrimaryParagraph data={items.text} />
                            </div>
                        ))}
                        <PrimaryButton mainClass='w-fit mx-auto lg:mx-0' className='lg:mt-10 md:mt-8 mt-5 lg:px-8 lg:py-3.5' text='Test it Yourself' />
                    </div>
                </div>
            </div>
            <Image src='/assets/images/webp/green-ellipse.webp' className='absolute -top-[40%] left-0' width={303} height={245} alt='ellipse' priority />
            <Image src='/assets/images/webp/ellipse-right.webp' className='absolute -bottom-[35%] right-0' width={303} height={245} alt='ellipse' priority />
        </div>
    )
}

export default Tracking