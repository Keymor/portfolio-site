import { useState } from "react"

export default function Skills() {
    const array = [
        {
            img: '1'
        },
        {
            img: '2'
        },
        {
            img: '3'
        },
        {
            img: '4'
        },
        {
            img: '5'
        },
        {
            img: '6'
        },
        {
            img: '7'
        },
        {
            img: '8'
        },
        {
            img: '9'
        },
        {
            img: '10'
        },
    ]
    const [hover , setHover] = useState(-10)

    const onMouse = (index: number) => {
        setHover(index)
    }
    const onMouseLeave = () => {
        setHover(-10)
    }

    return (
        <div className='flex flex-col gap-5 w-full pt-20'>
            <div className='w-fit self-center mx-auto bg-pink-400/30 text-pink-500 px-4 py-2 rounded-3xl font-bold'>Stack</div>
            <h1 className='w-fit text-4xl font-bold mx-auto'>My skills</h1>
            <div className='flex flex-row w-[90%] mx-auto'>
                <div className='w-full h-30 flex items-center relative'>
                    {array.map((item, index) => {
                        return (
                            <div style={{ 
                                animation: 'shifting 10s linear infinite', 
                                animationDelay: `${10 - index}s`, 
                                transform: `scale(${
                                    hover === index + 1 || 
                                    hover === index - 1 || 
                                    hover === 0 && index === 9 ||
                                    hover === 9 && index === 0
                                    ? 1.10 : 1})`}}
                                onMouseEnter={() => onMouse(index)}
                                onMouseLeave={() => onMouseLeave()}
                                className='absolute size-25 bg-white shadow-md rounded-md flex right-0 opacity-0 translate-x-[50%] hover:size-35 duration-200'>
                                <div /* className='size-8 bg-amber-300 rounded-4xl m-auto' */></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}