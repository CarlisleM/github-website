import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
	HomeOutlined,
	FolderOutlined,
	SolutionOutlined,
} from '@ant-design/icons'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-top: 20px; */
`

const FooterBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 60px;
	width: 100%;
	background-color: #00b5fc;
	border-top: 2px solid black;

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
				</FooterBar>
			</Container>
		)
	}
}
