export default function Header() {

    return (
        <div className="z-1 w-full h-15 bg-white text-center fixed top-0 flex flex-row after:content-[''] after:bg-black/10 after:w-full after:h-[1px] after:absolute after:bottom-0">
            <p className="ml-10 self-center font-bold text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Vladyslav Kutuzov</p>
            <button className='self-center ml-auto mr-10 bg-pink-400 text-amber-50 px-4 py-2 rounded-3xl font-bold'>Contact me</button>
        </div>
    )
}