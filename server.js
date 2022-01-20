const express = require('express')
const app = express()
const ReactDOM = require('react-dom/server')
const React = require('react')

app.get('/', (req, res) => {
    const html = `
        <main>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <h1>This is Home page </h1>
        </main>
    `
    const withoutJsx = React.createElement('main',
        null,
        React.createElement('a', { href: '/' }, 'Home'),
        React.createElement('a', { href: '/about' }, 'About'),
        React.createElement('h1', null, 'This is Home page')
    )

    res.send(ReactDOM.renderToString(withoutJsx))
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
