import Image from 'next/image'
import React from 'react'
import snakegame from '../public/assets/projects/snakegame.jpg'
import ascii from '../public/assets/projects/ascii.jpg'
import todo from '../public/assets/projects/todo.jpg'
import ProjectItems from './ProjectItems'
const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItems
                        title='Snake Xenzia'
                        tech='Javascript'
                        backgroundImg={snakegame}
                        projectUrl='/snakegame'
                    />
                    <ProjectItems
                        title='Ascii code generator'
                        tech='Javascript'
                        backgroundImg={ascii}
                        projectUrl='/ascii'
                    />
                    <ProjectItems
                        title='TODOist'
                        tech='React'
                        backgroundImg={todo}
                        projectUrl='/todo'
                    />

                </div>

            </div>

        </div>
    )
}

export default Projects