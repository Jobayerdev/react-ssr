const express = require('express')
const app = express()
const ReactDOM = require('react-dom/server')
const React = require('react')

app.get('/', (req, res) => {
    res.send(`
    <main>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
       <h1>This is Home page </h1>
    </main>
    `)
})

app.get('/contact', (req, res) => {
    const withoutJsx = React.createElement(
        'div',
        null,
        React.createElement("h1", null, `This is Contact page`),
        React.createElement("h2", null, `Phone: +8801923111111`),
        React.createElement('p', null, '6 North Kafrul')
    )
    const jsx = `
        <div>
            <h1> Phone: +8801923111111 </h1>
            <p> 6 North Kafrul </p>
        </div>
    `
    res.send(ReactDOM.renderToString(withoutJsx))
})

app.get('/about', (req, res) => {
    res.send(`
    <main>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <h1>This is About page </h1>
    </main>
    `)
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
