import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import tailwind from '../public/assets/skills/tailwind.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import nextjs from '../public/assets/skills/nextjs.png'
import github from '../public/assets/skills/github1.png'
import firebase from '../public/assets/skills/firebase.png'
import Cards from './Cards'

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className=' tracking-widest uppercase font-bold text-2xl text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Cards img={html} text={"HTML"} />
                    <Cards img={css} text={"CSS"} />
                    <Cards img={javascript} text={"JavaScript"} />
                    <Cards img={tailwind} text={"Tailwind CSS"} />
                    <Cards img={react} text={"React"} />
                    <Cards img={nextjs} text={"NextJs"} />
                    <Cards img={github} text={"Github"} />
                    <Cards img={firebase} text={"Firebase"} />
                </div>
            </div>
        </div>
    )
}

export default Skills