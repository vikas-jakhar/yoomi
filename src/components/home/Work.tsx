import Image from 'next/image'

const Work = () => {
    return (
        <div className='lg:-mt-32 md:-mt-28 sm:-mt-24 -mt-16'>
            <div className="container">
                <Image src='/assets/images/webp/work-img.webp' className='w-full' width={2367} height={1430} alt='work' priority />
            </div>
        </div>
    )
}

export default Work