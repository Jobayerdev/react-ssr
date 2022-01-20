const express = require('express')
const app = express()

let message = 'Hello World'

app.get('/', (req, res) => {
    res.send(`<h1>${message}</h1>`)
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})