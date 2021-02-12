import React from 'react'
import styled from 'styled-components'
// import { Divider } from '../StyledComponents'
import { Link } from 'react-router-dom'

import boar from '../images/boar2.png'
import leaguelogo from '../images/leaugelogo.jpg'
import melee from '../images/melee.png'
import omegle from '../images/omegle.png'
import obs from '../images/obs.png'
import filler from '../images/x.png'

import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react'

import SwipeableViews from 'react-swipeable-views'

const ProjectsItems = [
	{
		title: 'League Site Scraper',
		logo: leaguelogo,
		link: '/league-scraper',
	},
	{
		title: 'Melee Iron Man',
		logo: melee,
		link: '/melee-iron-man',
	},
	{
		title: 'Omegle Bot',
		logo: omegle,
		link: '/omegle-bot',
	},
	{
		title: 'Score Boar',
		logo: boar,
		link: '/score-boar',
	},
	{
		title: 'OBS Auto Record',
		logo: obs,
		link: '/obs-auto-record',
	},
	{
		title: 'Filler',
		logo: filler,
		link: '/filler',
	},
	{
		title: 'Filler',
		logo: filler,
		link: '/filler',
	},
	{
		title: 'Filler',
		logo: filler,
		link: '/filler',
	},
	{
		title: 'Filler',
		logo: filler,
		link: '/filler',
	},
]

const ProjectsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const Project = styled.div`
	// Desktop
	/* flex: 0 30.5%; */

	height: calc(100vh - 62px);

	/* border: solid black 1px; */
	/* :not(:nth-last-child(-n + 3)) {
		margin: 0 0 20px;
	} */ // Phone
	@media only screen and (max-width: 768px) {
		width: 100%;
		/* border: none; */
		/* :not(:last-child) {
			margin: 0 0 20px;
		} */
	}
`

const projectObject = ProjectsItems.map((project) => (
	<Project>
		<h1>{project.title}</h1>
		<img src={project.logo} alt='Logo' height='100px' width='100px' />
		<div>
			<Link to={project.link}>{project.title}</Link>
		</div>
	</Project>
))

const MyComponent = () => (
	<SwipeableViews
		containerStyle={{
			width: '100%',
			height: 'calc(100vh - 40px)', // how much to scroll
			WebkitOverflowScrolling: 'touch',
		}}
		axis='y'
		style={{ height: 'calc(100vh - 58px)', width: '100%' }}
	>
		{projectObject}
	</SwipeableViews>
)

function Projects() {
	const projectObject = ProjectsItems.map((project) => (
		<Project>
			<h1>{project.title}</h1>
			<img src={project.logo} alt='Logo' height='100px' width='100px' />
			<div>
				<Link to={project.link}>{project.title}</Link>
			</div>
		</Project>
	))

	return (
		<ProjectsContainer>
			<MyComponent></MyComponent>
			{/* {projectObject} */}
			<Responsive // Fix this divider
				displayIn={[
					IdResponsiveRenderOnlyIn.Mobile,
					IdResponsiveRenderOnlyIn.Tablet,
				]}
			></Responsive>
			{/* <Divider /> */}
		</ProjectsContainer>
	)
}

export default Projects
