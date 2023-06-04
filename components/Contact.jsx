import Image from 'next/image'
import React from 'react'
import contactImg from '../public/assets/images/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className=' tracking-widest uppercase font-bold text-2xl text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* Left-section */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt="/" />
                            </div>
                            <div>
                                <h2 className='py-2 text-[#5651e5]'>Tahmeer Pasha</h2>
                                <p>Front-End Developer</p>
                                <p className='py-4'>I am available for freelance and Internship oppurtunities. Contact me and let's talk</p>
                            </div>
                            <div>
                                <p className='pt-8 uppercase'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <Link href='https://www.linkedin.com/in/tahmeer-pasha-b36267202/'>
                                            <FaLinkedinIn />
                                        </Link>                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <Link href='https://github.com/Tahmeerpasha'>
                                            <FaGithub />
                                        </Link>                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <Link href='https://www.instagram.com/'>
                                            <BsInstagram />
                                        </Link>                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <Link href='https://twitter.com/IamTahmeer'>
                                            <BsTwitter />
                                        </Link>                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <Link href='https://tahmeerpasha.hashnode.dev/'>
                                            <SiHashnode />
                                        </Link>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right-section */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input type="email" className='border-2 rounded-lg p-3 flex' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact