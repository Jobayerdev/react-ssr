import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
    const jsx = (
        <main>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <h1>This is Home Page </h1>
        </main>
    )
    res.send(renderToString(jsx))
})

app.get('/about', (req, res) => {
    const jsx = (
        <main>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <h1>This is About page </h1>
        </main>
    )
    res.send(renderToString(jsx))
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
