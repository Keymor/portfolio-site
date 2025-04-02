import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.post('/submit', (req, res) => {
    console.log(req.body); // Access form data here
    res.send(`<h1>Received: ${req.body.name}, ${req.body.email}<h1/>`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
