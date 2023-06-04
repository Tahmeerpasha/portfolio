import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si';
import Link from 'next/link';
function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Let's build something great together</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#5651e5]'>Tahmeer Pasha</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-400 max-w-[70%] m-auto'>
                        I'm a beginner in front end development eager to learn and grow in my field of interest.
                        Currently I'm working on improving my logical and problem solving skills through Data Structures and Algorithms.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/tahmeer-pasha-b36267202/'>
                                <FaLinkedinIn />
                            </Link>                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://github.com/Tahmeerpasha'>
                                <FaGithub />
                            </Link>                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.instagram.com/'>
                                <BsInstagram />
                            </Link>                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://twitter.com/IamTahmeer'>
                                <BsTwitter />
                            </Link>                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://tahmeerpasha.hashnode.dev/'>
                                <SiHashnode />
                            </Link>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main