import AboutPage from '../clients/src/pages/AboutPage'
import HomePage from '../clients/src/pages/HomePage'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import renderer from '../clients/helpers/renderer'

const app = express()

app.use(express.static('../clients/build'))

app.get('/', (req, res) => {
    res.send(renderer())
})

app.get('/about', (req, res) => {
    res.send(renderToString(<AboutPage />))
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
