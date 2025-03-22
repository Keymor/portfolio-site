export default function Header() {

    return (
        <div className=" w-full z-1 h-15 bg-white top-0 flex flex-row after:content-[''] after:bg-black/10 after:w-full after:h-[1px] after:absolute after:top-15">
            <p className="ml-2 sm:ml-10 mr-auto self-center font-bold text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Vladyslav Kutuzov</p>
            <button className=' my-2 ml-auto mr-2 sm:mr-10 min-w-31 bg-pink-400 text-amber-50 px-4 py-2 rounded-3xl font-bold'>Contact me</button>
        </div>
    )
}