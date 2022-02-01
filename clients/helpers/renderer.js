import HomePage from '../src/pages/HomePage'
import React from 'react'
import { renderToString } from 'react-dom/server'

export default () => {
    const content = renderToString(<HomePage />)
    return `
    <html>
        <head></head>
        <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
        </body>
    </html>
    `
}