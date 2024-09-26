import Header from '../common/Header'
import PrimaryButton from '../custom-ui/PrimaryButton'

const Hero = () => {
    return (
        <div className='pt-[26px]'>
            <Header />
            <div className="container pt-8 sm:pt-16 lg:pt-24 mt-0.5">
                <h2 className='font-plus max-w-[823px] w-full mx-auto text-center text-3xl sm:text-4xl md:text-custom-xl lg:text-custom-2xl md:leading-custom-xl lg:leading-custom-2xl font-extrabold'>
                    Next Generation <span className='font-plus font-normal'>Patient Engagement and RTM Solution✨</span>
                </h2>
                <p className='w-fit mx-auto text-center font-inter font-normal text-lg sm:text-2xl opacity-70 mt-4'>Industry leading AI motion-tracking technology</p>
                <form id='fromEmail' method="get" className='max-w-[428px] mx-auto w-full p-1.5 bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
                    <input type="email" placeholder='Enter Your Email' className='font-medium font-inter placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full' required />
                    <PrimaryButton text='Get Started' />
                </form>
                <div className="w-[200px] hidden z-50 place-items-center h-12 bg-white shadow-3xl fixed right-10 bottom-10">
                    <span className='absolute'></span>
                    <span className='font-inter capitalize text-base'>submit successfully</span>
                </div>
                <div className="max-w-[500px] w-full z-50 px-5 py-10 hidden bg-white rounded-lg shadow-3xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <form id='emailForm' method="get" className='mx-auto w-full flex flex-col gap-5 justify-between items-center'>
                        <input type="email" placeholder='Enter Your Email' className='font-medium font-inter placeholder:text-black border-2 rounded text-base opacity-70 p-2 outline-none max-w-[392px] w-full' required />
                        <input type='password' placeholder='Enter Your Password' className='font-medium font-inter placeholder:text-black border-2 rounded text-base opacity-70 p-2 outline-none max-w-[392px] w-full' required />
                        <PrimaryButton text='Get Started' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
