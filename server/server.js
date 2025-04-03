import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/home', (req, res) => {
    res.send(`<h1>${__dirname}, ${__filename}</h1>`)
})

app.post('/submit', (req, res) => {
    console.log(req.body);
    const {serverM} = req.body
    req.body.serverM = 'Server response: '
    res.json(req.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));
