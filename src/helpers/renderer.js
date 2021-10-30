import Home from '../client/components/Home'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

export default (req) => {
	const content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			<Home />
		</StaticRouter>
	)
	return `<html>
	<head></head>
	<body>
	<div id="root">${content}</div>
	<script src="bundle.js"></script>
	</body>
	</html>`
}
