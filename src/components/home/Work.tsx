import Image from 'next/image'

const Work = () => {
    return (
        <div className='lg:-mt-32 xl:-mt-40 md:-mt-28 sm:-mt-24 -mt-16 relative z-10 2xl:-mt-28'>
            <div className="container">
                <Image src='/assets/images/webp/work-img.webp' className='w-full hidden md:flex pointer-events-none' width={2367} height={1430} alt='work' priority />
                <Image src='/assets/images/webp/work-img-small.webp' className='w-full md:hidden pointer-events-none' width={2367} height={1430} alt='work' priority />
            </div>
        </div>
    )
}

export default Work