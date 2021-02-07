import React from 'react'
import styled from 'styled-components'
import melee from '../../images/melee.png'

const Project = styled.div`
	flex: 0 30%;
	margin: 20px 45px;
	height: 785px;
	border: 2px solid black;
	border-radius: 10px;
`

function MeleeIronMan() {
	return (
		<div>
			<Project>
				<h1>Melee Iron Man</h1>
				<img src={melee} alt='Logo' height='200px' width='200px' />
				<p>What is Melee Iron Man?</p>
			</Project>
		</div>
	)
}

export default MeleeIronMan
