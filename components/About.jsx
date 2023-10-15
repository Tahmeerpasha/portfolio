import React from 'react'
import Image from 'next/image'
import profile from '../public/assets/images/Tahmeer4.jpg'
const About = () => {
    return (
        <div id='about' className='md:h-screen w-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase tracking-widest font-bold text-2xl text-[#5651e5]'>About Me</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I am a Developer</p>
                    <p className='py-2 text-justify text-l text-gray-900'>
                        Hi there! My name is Tahmeer Pasha, and I'm a information science and engineering student at Visvesvaraya Technological University. I'm eager to learn and grow in my field and I am committed to working hard to achieve my goals.
                        I have a strong passion for Web Development, and I am constantly reading and researching to stay up-to-date on the latest trends and developments in the industry. I'm a dedicated and hardworking individual, and I'm always looking for ways to improve my skills and knowledge.
                        Outside of my studies, I enjoy Learning more about new technologies, which have taught me valuable skills such as HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, Tailwind Css and Core Java. I'm currently learning Backend development in Java.  I believe that these skills, combined with my dedication and work ethic, will make me a valuable asset to any team or organization.
                        Thank you for taking the time to learn a little bit more about me. I'm excited to see where my career in IT industry will take me, and I'm always open to new opportunities and connections. If you'd like to chat or learn more about my work and interests, please don't hesitate to reach out.</p>
                    {/* <pre>Summary:</pre>
                    <pre>Team Player | Smart Worker | Coding enthusiast.</pre>
                    <pre>Learning Web development and Data structures and algorithms.</pre>
                    <pre>Proficient in Java programming language.</pre> */}
                    <a href='#projects' className='py-2 text-gray-600'>Checkout my latest projects!</a>
                </div>
                <div className='w-full rounded h-auto m-auto shadow-xl shadow-gray-400  flex items-center justify-center  hover:scale-105 ease-in duration-300'>
                    <Image className='cursor-pointer rounded ' src={profile} alt='/' width={1980} height={480} />
                </div>
            </div>
        </div>
    )
}

export default About