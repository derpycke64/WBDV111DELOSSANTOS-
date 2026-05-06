const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Aboutus.html'))
})

app.get('/training', (req, res) => {
    res.sendFile(path.join(__dirname, 'Training.html'))
})

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'Shop.html'))
})

app.get('/membership', (req, res) => {
    res.sendFile(path.join(__dirname, 'Membership.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login.html'))
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})