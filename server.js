import AppComponent from './src/App.js'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
    res.send(
        renderToString(
            <main>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
                <h1>Home Page</h1>
            </main>
        )
    )
})


app.get('/about', (req, res) => {
    res.send(renderToString(
        <main>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <h1>About Page</h1>
        </main>
    ))
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
