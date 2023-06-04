import Image from 'next/image'
import React from 'react'
import randomizer from '../../public/assets/projects/randomizer.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
const Randomizer = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <Image src={randomizer} alt='/' className='absolute z-1' layout='fill' objectFit='fill' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-black z-10 p-2'>
                        <h2>Randomizer</h2>
                        <h3>React.js/ Next.js</h3>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This is a random website which uses different api's to generate Cat Facts, predict the age of a user based on his/her name and generates excuse based on certain filters. This is built using React.js and tailwindCSS</p>
                    <button className='px-8 py-2 mt-4 mr-8' ><Link href={'https://randomizer-low3ngifp-tahmeerpasha.vercel.app/'}>Demo</Link></button>
                    <button className='px-8 py-2 mt-4'><Link href={'https://github.com/Tahmeerpasha/Randomizer'}>Code</Link></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React.js</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React-Router</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind CSS</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Javascript</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className='underline cursor-pointer'>Go Back</p></Link>
            </div>
        </div>
    )
}

export default Randomizer