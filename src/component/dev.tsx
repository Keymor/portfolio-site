export default function Dev() {
    return (
        <form action="/submit" method="POST" className="mx-auto mb-10 bg-pink-200 p-4 rounded-2xl flex flex-row gap-4">
            <input type="text" name="name" placeholder="Your Name" className="bg-pink-50 p-2 rounded-md"/>
            <input type="email" name="email" placeholder="Your Email" className="bg-pink-50 p-2 rounded-md"/>
            <button type="submit" className="bg-pink-300 rounded-md p-2 cursor-pointer">Send</button>
        </form>
    )
}