import linkedIn from '../img/l.png'

export default function Contact() {
    return (
        <div className='flex flex-col bg-gradient-to-b from-purple-100/50 to-pink-50/0 py-22 mt-20'>
            <div className='w-fit self-center mx-auto bg-pink-400/30 text-pink-500 px-4 py-2 rounded-3xl font-bold'>Hair Me</div>
            <h1 className='w-fit text-4xl font-bold mx-auto'>Get in tuch</h1>
            <p className='text-zinc-400 w-fit mx-auto'>Some text</p>
            <div className='h-100 w-90 sm:w-150 bg-white mx-auto mt-10 border-1 border-pink-300 rounded-2xl flex flex-col p-5'>
                <div className='flex flex-row mt-auto ml-6 sm:ml-10'>
                    <a href='https://www.linkedin.com/in/vladyslav-kutuzov/' target="_blank">
                        <div className='size-20 bg-white rounded-full flex cursor-pointer'>
                            <img src={linkedIn} alt='linkedIn'></img>
                        </div>
                    </a>
                    <div className='ml-5 my-auto'>
                        <h1 className='font-bold text-xl'>Vladyslav Kutuzov</h1>
                        <p className='text-zinc-400'>Front End Developer</p>
                    </div>
                </div>
                <div className='flex flex-row my-auto ml-6 sm:ml-10'>
                    <div className='size-20 bg-white border-1 border-pink-400 rounded-full flex cursor-pointer'>
                        <div className=''></div>
                    </div>
                    <div className='ml-5 my-auto'>
                        <h1 className='font-bold text-xl'>Email</h1>
                        <p className='text-zinc-400'>asd@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row mb-auto ml-6 sm:ml-10'>
                    <div className='size-20 bg-white border-1 border-pink-400 rounded-full flex cursor-pointer'>
                        <div className=''></div>
                    </div>
                    <div className='ml-5 my-auto'>
                        <h1 className='font-bold text-xl'>Email</h1>
                        <p className='text-zinc-400'>asd@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
