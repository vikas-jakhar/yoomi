import PrimaryButton from '../custom-ui/PrimaryButton'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { TRACKING_DATA } from '@/utils/Helper';
import Icon from '../common/Icons';
import Image from 'next/image';

const Report = () => {
    return (
        <div className='lg:py-24 sm:py-20 py-16'>
            <div className="container">
                <div className="justify-between flex-col-reverse lg:flex-row gap-10 flex items-center shadow-4xl rounded-[32px] bg-white w-full py-5
                 md:py-10 lg:py-14 px-2.5 sm:px-[18px]">
                    <div className="lg:max-w-[404px] w-full ml-4">
                        <p className='text-deep-blue font-inter uppercase font-medium text-sm sm:text-base'>report</p>
                        <p className='font-plus font-normal text-xl md:text-3xl xl:text-custom-lg mt-2'>Reporting +  <span className='font-plus font-semibold'>Analytics</span></p>
                        <PrimaryButton className='lg:mt-10 md:mt-8 mt-5 lg:px-8 lg:py-3.5' text='Test it Yourself' />
                    </div>
                    <div className="max-w-[619px] w-full flex pt-14 pb-16 justify-end items-center relative">
                        <Image src='/assets/images/webp/table-img.png' className='max-w-[570px] w-full pointer-events-none' width={1207} height={817} alt='table' />
                        <Image src='/assets/images/webp/week-table-img.png' className='sm:max-w-[257px] w-full absolute bottom-0 z-10 right-5 pointer-events-none' width={257} height={255} alt='week-table-img' />
                        <Image src='/assets/images/webp/status-img.png' className='sm:max-w-[314px] w-full absolute top-0 z-10 left-0 pointer-events-none' width={626} height={331} alt='status-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report