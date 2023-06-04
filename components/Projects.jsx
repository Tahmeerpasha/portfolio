import React from 'react'
import snakegame from '../public/assets/projects/snakegame.jpg'
import ascii from '../public/assets/projects/ascii.jpg'
import todo from '../public/assets/projects/todo.jpg'
import randomizer from '../public/assets/projects/randomizer.jpg'
import socialite from '../public/assets/projects/Socialite.jpg'
import todolist from '../public/assets/projects/todolist.jpg'


import ProjectItems from './ProjectItems'
const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase tracking-widest font-bold text-2xl text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItems
                        title='Snake Xenzia'
                        tech='Javascript'
                        backgroundImg={snakegame}
                        projectUrl='/SnakeGame'
                    />
                    <ProjectItems
                        title='Ascii code generator'
                        tech='Javascript'
                        backgroundImg={ascii}
                        projectUrl='/AsciiCode'
                    />
                    <ProjectItems
                        title='TODOist'
                        tech='Javascript'
                        backgroundImg={todo}
                        projectUrl='/TodoList'
                    />
                    <ProjectItems
                        title='Ramdomizer'
                        tech='React.js'
                        backgroundImg={randomizer}
                        projectUrl='/Randomizer'
                    />
                    <ProjectItems
                        title='Socialite'
                        tech='React.js'
                        backgroundImg={socialite}
                        projectUrl='/Socialite'
                    />
                    <ProjectItems
                        title='TO-DO List'
                        tech='React.js'
                        backgroundImg={todolist}
                        projectUrl='/Todo'
                    />

                </div>

            </div>

        </div>
    )
}

export default Projects