import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div id='about' className='md:h-screen w-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
                <div className='col-span-2'>
                    <p className='uppercase tracking-widest text-xl text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I am a Developer</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quis laboriosam? Temporibus facilis nihil magnam molestiae distinctio,
                        atque repellendus! Ullam esse, error ea quae eligendi molestias repellat iusto autem, atque unde quis. Ab iste quam fuga provident, sed,
                        dignissimos nesciunt quod earum impedit sint laudantium? Laborum consectetur totam aspernatur eos.</p>
                    <p className='py-2 text-gray-600'>Checkout my latest projects!</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src='/../public/assets/Tahmeer1.jpg' alt='/' width={1980} height={480} />
                </div>
            </div>
        </div>
    )
}

export default About