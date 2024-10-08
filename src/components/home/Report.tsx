import PrimaryButton from '../custom-ui/PrimaryButton'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image';

const Report = () => {
    return (
        <div className='lg:py-24 sm:py-20 py-16' id='report'>
            <div className="container">
                <div data-aos='zoom-in' className="justify-between overflow-hidden relative flex-col lg:flex-row gap-10 flex items-center shadow-4xl rounded-[32px] bg-white w-full py-5
                 md:py-10 lg:py-12 px-2.5 sm:px-[18px]">
                    <div className="lg:max-w-[404px] w-full ml-4 flex-col flex items-center lg:items-start">
                        <p data-aos='zoom-in' className='text-deep-blue font-inter uppercase font-medium text-sm sm:text-base'>report</p>
                        <p data-aos='zoom-in' className='font-plus font-normal text-center lg:text-left text-xl md:text-3xl xl:text-custom-lg mt-2'>Reporting +  <span className='font-plus font-semibold'>Analytics</span></p>
                        <PrimaryParagraph className='mt-5 text-center lg:text-left' data='Track patient progress over time with compliance, pain, RPE, ROM and other key metrics' />
                        <PrimaryButton className='lg:mt-9 sm:mt-8 mt-5 lg:px-5 lg:py-3.5' text='View the Matrics' />
                    </div>
                    <div className="max-w-[619px] w-full flex pt-12 sm:pt-14 pb-4 justify-end items-center relative">
                        <Image data-aos='zoom-in' src='/assets/images/webp/table-img.webp' className='max-w-[570px] w-full pointer-events-none' width={1207} height={817} alt='table' priority />
                        <Image data-aos='zoom-in' src='/assets/images/webp/week-table-img.webp' className='sm:max-w-[257px] max-w-[150px] w-full absolute -bottom-5 sm:-bottom-12 z-10 right-2 sm:right-5 pointer-events-none' width={257} height={255} alt='week-table-img' priority />
                        <Image data-aos='zoom-in' src='/assets/images/webp/status-img.webp' className='sm:max-w-[314px] max-w-[180px] w-full absolute top-0 z-10 left-0 pointer-events-none' width={626} height={331} alt='status-img' priority />
                    </div>
                    <Image src='/assets/images/webp/ellipse-right.webp' className='absolute -bottom-8 -left-8' width={159} height={141} alt='ellipse' priority />
                </div>
            </div>
        </div>
    )
}

export default Report