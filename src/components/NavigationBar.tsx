import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
	HomeOutlined,
	FolderOutlined,
	SolutionOutlined,
} from '@ant-design/icons'
// import { ReactComponent as ResumeOutlined } from '../images/icons/resume.svg'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-bottom: 20px; */
`

const NavBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	height: 60px;
	width: 100%;
	background-color: #00b5fc;
	border-bottom: 2px solid black;

	// Phone
	@media only screen and (max-width: 768px) {
		background-color: #00b5fc;
	}
`

export default class NavigationBar extends React.Component {
	render() {
		return (
			<Container>
				<NavBar>
					<div>
						<Link to='/'>
							<HomeOutlined style={{ fontSize: '28px', color: 'white' }} />
						</Link>
					</div>
					<div>
						<Link to='/projects'>
							<FolderOutlined style={{ fontSize: '28px', color: 'white' }} />
						</Link>
					</div>
					<div>
						{' '}
						<Link to='/resume'>
							<SolutionOutlined style={{ fontSize: '28px', color: 'white' }} />
							{/* <Icon component={() => <ResumeOutlined height='300px' />} />{' '} */}
						</Link>
					</div>
				</NavBar>
			</Container>
		)
	}
}
