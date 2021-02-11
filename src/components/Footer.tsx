import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
`

const FooterBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	height: 40px;
	width: 95%;
	background-color: #00d4ff;
	border: 2px solid black;
	border-radius: 10px;

	// Phone
	@media only screen and (max-width: 768px) {
		background-color: #00b5fc;
	}
`

export default class Footer extends React.Component {
	render() {
		return (
			<Container>
				<FooterBar>
					<div>
						<Link to='/'>Home</Link>
					</div>
					<div>
						<Link to='/projects'>Projects</Link>
					</div>
					<div>
						<Link to='/resume'>Resume</Link>
					</div>
				</FooterBar>
			</Container>
		)
	}
}
