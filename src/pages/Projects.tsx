import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import boar from '../images/boar2.png'
import leaguelogo from '../images/leaugelogo.jpg'
import melee from '../images/melee.png'
import omegle from '../images/omegle.png'
import obs from '../images/obs.png'
import filler from '../images/x.png'

const ProjectsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const Project = styled.div`
	flex: 0 30%;
	margin: 20px 0 0;
	height: 300px;
	border: 2px solid black;
	border-radius: 10px;
`

function Projects() {
	return (
		<ProjectsContainer>
			<Project>
				<h1>League Site Scraper</h1>
				<img src={leaguelogo} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/league-scraper'>League Site Scraper</Link>
				</div>
			</Project>
			<Project>
				<h1>Melee Iron Man</h1>
				<img src={melee} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/melee-iron-man'>Melee Iron Man</Link>
				</div>
			</Project>
			<Project>
				<h1>Omegle Bot</h1>
				<img src={omegle} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/omegle-bot'>Omegle Bot</Link>
				</div>
			</Project>
			<Project>
				<h1>Score Boar</h1>
				<img src={boar} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/score-boar'>Score Boar Link</Link>
				</div>
			</Project>
			<Project>
				<h1>OBS Auto Record</h1>
				<img src={obs} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/obs-auto-record'>OBS Auto Record</Link>
				</div>
			</Project>
			<Project>
				<h1>Filler</h1>
				<img src={filler} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/filler'>Filler Link</Link>
				</div>
			</Project>
			<Project>
				<h1>Filler</h1>
				<img src={filler} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/filler'>Filler Link</Link>
				</div>
			</Project>
			<Project>
				<h1>Filler</h1>
				<img src={filler} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/filler'>Filler Link</Link>
				</div>
			</Project>
			<Project>
				<h1>Filler</h1>
				<img src={filler} alt='Logo' height='100px' width='100px' />
				<div>
					<Link to='/filler'>Filler Link</Link>
				</div>
			</Project>
		</ProjectsContainer>
	)
}

export default Projects
