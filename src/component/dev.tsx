import { useState } from "react"

export default function Dev() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new URLSearchParams()

        formData.append('name', name)
        formData.append('email', email)


        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        })

        alert('Thank you for contact!')

    }

    return (
        <div>
            <form onSubmit={submitForm} className="mx-auto w-150 mb-10 bg-pink-200 p-4 rounded-2xl flex flex-row gap-4 justify-center">
                <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="name" placeholder="Your Name" className="bg-pink-50 p-2 rounded-md" />
                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" placeholder="Your Email" className="bg-pink-50 p-2 rounded-md" />
                <button type="submit" className="bg-pink-300 rounded-md p-2 cursor-pointer">Send</button>
            </form>
        </div>
    )
}