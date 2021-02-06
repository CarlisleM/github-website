import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
	render() {
		return (
			<div
				className='Footer'
				style={{
					margin: '20px 50px 10px',
					height: '40px',
					backgroundColor: '#00d4ff',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					border: '2px solid black',
					borderRadius: '10px',
				}}
			>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to='/projects'>Projects</Link>
				</div>
				<div>
					{' '}
					<Link to='/resume'>Resume</Link>{' '}
				</div>
			</div>
		)
	}
}
