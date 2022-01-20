const express = require('express')
const app = express()
const reactDOM = require('react-dom/server')
const AppComponent = require('./src/App.js')

app.get('/', (req, res) => {
    res.send(`
    <main>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        ${reactDOM.renderToString(AppComponent())}
    </main>
   
    `)
})


app.get('/about', (req, res) => {
    res.send(`
    <main>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        <h1>This is About page </h1>
    </main>
    `)
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
