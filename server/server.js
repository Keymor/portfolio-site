import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const User = mongoose.model('Contacts', {
    name: String,
    email: String
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to MONGOOSE!'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/home', (req, res) => {
    res.send(`<h1>${__dirname}, ${__filename}</h1>`)
})

app.post('/submit', async(req, res) => {
    const user = new User(req.body)
    await user.save()
    console.log('New user added!')
});

app.listen(3000, () => console.log('Server running on port 3000'));
