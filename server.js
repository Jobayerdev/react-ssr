const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <main>
        <a href="/">Home</a>
        <a href="/about">About</a>

        <h1>This is Home page </h1>
    </main>
    `)
})


app.get('/about', (req, res) => {
    res.send(`
    <main>
        <a href="/">Home</a>
        <a href="/about">About</a>
        
        <h1>This is About page </h1>
    </main>
    `)
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
