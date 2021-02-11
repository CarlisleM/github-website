import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import boar from '../images/boar2.png'
import leaguelogo from '../images/leaugelogo.jpg'
import melee from '../images/melee.png'
import omegle from '../images/omegle.png'
import obs from '../images/obs.png'
import filler from '../images/x.png'

import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react'

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
	flex: 0 30%;
	height: 300px;
	border: 2px solid black;
	border-radius: 10px;

	:not(:nth-last-child(-n + 3)) {
		margin: 0 0 20px;
	}

	// Phone
	@media only screen and (max-width: 768px) {
		flex: 0 90%;
		border: none;
		:not(:last-child) {
			margin: 0 0 20px;
		}
	}
`

const Divider = styled.hr`
	width: 100%;
	border-top: 2px solid lightgrey; //  Maybe a better colour choice here
`

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
			{projectObject}
			<Responsive // Fix this divider
				displayIn={[
					IdResponsiveRenderOnlyIn.Mobile,
					IdResponsiveRenderOnlyIn.Tablet,
				]}
			></Responsive>
		</ProjectsContainer>
	)
}

export default Projects
