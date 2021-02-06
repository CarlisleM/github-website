import React from 'react'
import { Link } from 'react-router-dom'

export default class NavigationBar extends React.Component {
	render() {
		return (
			<div
				className='NavigationBar'
				style={{
					height: '40px',
					width: '95%',
					margin: '10px 45px 0px',
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
