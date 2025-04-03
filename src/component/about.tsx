import { useEffect, useState } from 'react'
import '../index.css'
import linkedIn from '../img/l.png'

export default function About() {
    const [position, setposition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setposition(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="w-full h-200 mt-8 sm:mt-0 relative flex flex-col sm:flex-row items-center gap-10 sm:gap-0">
            <div className=" ml-8 mr-auto sm:ml-20 size-100 sm:size-150 content-center">
                <div className="w-fit self-center mb-5 bg-pink-400/30 text-pink-500 text-[0.9rem] px-4 py-2 rounded-3xl font-bold">Front End Developer</div>
                <p className="font-bold text-5xl">Hey! I'm Vladyslav Kutuzov</p>
                <p className="font-bold text-5xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">I build friendly web</p>
                <p className="font-bold text-5xl bg-purple-500 bg-clip-text text-transparent">experiences</p>
                {/* Links */}
                <div className='flex flex-row mt-5 gap-3 text-center'>
                    <a href='https://www.linkedin.com/in/vladyslav-kutuzov/' target="_blank">
                        <div className='size-12 bg-white rounded-4xl flex cursor-pointer hover:-translate-y-1 hover:drop-shadow-[0_3px_10px_rgba(245,40,145,0.2)] duration-200'>
                            <img src={linkedIn} alt='Ln'></img>
                        </div>
                    </a>
                    <div className='size-12 bg-white border-1 border-pink-400 rounded-4xl flex cursor-pointer hover:-translate-y-1 hover:drop-shadow-[0_3px_10px_rgba(245,40,145,0.2)] duration-200'>
                        <div className='size-8  rounded-4xl m-auto'></div>
                    </div>
                    <div className='size-12 bg-white border-1 border-pink-400 rounded-4xl flex cursor-pointer hover:-translate-y-1 hover:drop-shadow-[0_3px_10px_rgba(245,40,145,0.2)] duration-200'>
                        <div className='size-8 rounded-4xl m-auto'></div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto sm:ml-auto sm:mr-20 size-90 sm:size-130 bg-white rounded-4xl border-pink-200 border-5 text-center content-center font-bold sm:hover:size-140 sm:hover:-rotate-6 sm:hover:animate-popup duration-300">
                Photo
            </div>
            <div className='-z-1 absolute size-full '>
                <div
                    style={{ opacity: position > 1000 ? '100%' : '0%', transform: position > 1500 ? 'translateY(1500px)' : `translatey(${position}px)` }}
                    className='size-200 bg-pink-200 rounded-full absolute -left-50 -bottom-80 blur-3xl duration-900'>
                </div>
                <div
                    style={{ transform: position > 1500 ? 'translateY(1500px)' : `translateY(${position}px)` }}
                    className='size-100 bg-purple-200 rounded-full absolute right-0 blur-2xl duration-300'>
                </div>
                <div
                    style={{ transform: `translateY(-${position}px)` }}
                    className='size-90 bg-red-200 rounded-full absolute -bottom-20 -left-40 blur-xl'>
                </div>
                <div
                    style={{ transform: `translateY(-${position / 2}px)` }}
                    className='size-50 bg-purple-200 rounded-full absolute -bottom-30 left-70 blur-2xl'>
                </div>
                <div
                    className='size-35 bg-red-100 rounded-full absolute -bottom-30 left-100 blur-lg animate-move-up'>
                </div>
                <div
                    style={{ animation: 'move-up 6s linear infinite' }} className='size-35 bg-pink-100 rounded-full absolute -bottom-30 right-100 blur-lg'>
                </div>
            </div>
        </div>
    )
}