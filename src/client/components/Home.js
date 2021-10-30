import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
	return (
		<div>
			<h1>Hello, home component. </h1>
			<button onClick={() => console.log('Hi there!')}>On Click</button>
			<Link to='/hi'>Go</Link>
		</div>
	)
}

export default Home
