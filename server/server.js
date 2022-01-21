import AboutPage from '../clients/src/pages/AboutPage'
import HomePage from '../clients/src/pages/HomePage'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('../clients/build'))

app.get('/', (req, res) => {
    const content = renderToString(<HomePage />)
    const html = `
    <html>
        <head></head>
        <body>
        ${content}
        <script src="bundle.js"></script>
        </body>
    </html>
    `
    res.send(html)
})

app.get('/about', (req, res) => {
    res.send(renderToString(<AboutPage />))
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
