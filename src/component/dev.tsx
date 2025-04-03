import { useState } from "react"

export default function Dev() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState([''])

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new URLSearchParams()

        formData.append('name', name)

        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            })

            const data = await response.json()
            console.log(data)
            setMessage((message) => ([...message, ` ${data.serverM} `, `${data.name} `]))
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div>
            <form onSubmit={submitForm} className="mx-auto mb-10 bg-pink-200 p-4 rounded-2xl flex flex-row gap-4">
                <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="name" placeholder="Your Name" className="bg-pink-50 p-2 rounded-md" />
                {/* <input type="email" name="email" placeholder="Your Email" className="bg-pink-50 p-2 rounded-md" /> */}
                <button type="submit" className="bg-pink-300 rounded-md p-2 cursor-pointer">Send</button>
                <div style={{visibility: message.length < 3 ? 'hidden' : 'visible'}} className="my-auto bg-pink-100 p-2 rounded-md">{message}</div>
            </form>
        </div>
    )
}