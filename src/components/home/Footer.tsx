import Link from 'next/link';
import Image from 'next/image';
import Icon from '../common/Icons';
import { FOOTER_DATA } from '@/utils/Helper';

const Footer = () => {
    return (
        <div className='bg-black pt-24 -mt-[106px] pb-5 relative'>
            <div className="container lg:pt-24 sm:pt-20 pt-14 mt-5">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="max-w-[277px] w-full">
                        <Link href="/" className="w-fit group flex">
                            <Image src='/assets/images/webp/footer-icon.webp' className="pointer-events-none max-w-[192px] w-full" width={238} height={61} alt="logo" priority />
                        </Link>
                        <p className='my-7 font-inter font-light text-sm text-white'>I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” </p>
                        <Link href='mailto:contact@yoomi.com' className='font-inter font-light text-base transition_slow group hover:text-deep-blue text-white flex items-center gap-[18px]'><Icon iconName='emailIcon' />contact@yoomi.com</Link>
                        <Link href='callto:+123456789' className='font-inter font-light text-base transition_slow group hover:text-deep-blue text-white flex items-center mt-4 gap-[18px]'><Icon iconName='phoneIcon' />+123 456 789</Link>
                    </div>
                    <div className="md:max-w-[360px] mt-6 md:mt-0 w-full flex justify-between">
                        {FOOTER_DATA.map((data, idx) => (
                            <div key={idx} className="flex flex-col w-fit">
                                <h2 className='font-inter font-semibold text-white text-sm'>{data.heading}</h2>
                                <div className="flex flex-col">
                                    {data.items.map((i, index) => (
                                        <Link key={index} href={i.url} target={idx === 1 ? "_blank" : ""} className='font-inter w-fit font-normal text-white mt-[18px] transition_slow hover:text-deep-blue text-sm'>{i.subHeading}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ml-auto w-fit flex items-center gap-6 mt-16 mb-0.5">
                    <Link href='/' className='text-light-gray transition_slow hover:text-deep-blue font-inter font-normal text-sm'>Terms of Service</Link>
                    <Link href='/' className='text-light-gray transition_slow hover:text-deep-blue font-inter font-normal text-sm'>Privacy Policy</Link>
                    <Link href='/' className='text-light-gray transition_slow hover:text-deep-blue font-inter font-normal text-sm'>Cookies</Link>
                </div>
                <span className='flex bg-off-white w-full h-px absolute left-0 bottom-[61px]'></span>
            </div>
        </div>
    )
}

export default Footer