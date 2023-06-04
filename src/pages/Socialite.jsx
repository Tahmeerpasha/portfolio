import Image from 'next/image'
import React from 'react'
import socialite from '../../public/assets/projects/Socialite.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
const Socialite = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <Image src={socialite} alt='/' className='absolute z-1' layout='fill' objectFit='fill' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-black z-10 p-2'>
                        <h2>Socialite</h2>
                        <h3>React.js</h3>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This is a Social media platform where user can login and create posts, view and like others posts. This is still a on-going project where I'm planning to implement delete post, watch other users etc...</p>
                    <button className='px-8 py-2 mt-4 mr-8' ><Link href={'https://socialite-54f69.web.app/'}>Demo</Link></button>
                    <button className='px-8 py-2 mt-4'><Link href={'https://github.com/Tahmeerpasha/Socialite'}>Code</Link></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React.js</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React router</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />TypeScript</p>
                            <p className=' text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Firebase</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className='underline cursor-pointer'>Go Back</p></Link>
            </div>
        </div>
    )
}

export default Socialite