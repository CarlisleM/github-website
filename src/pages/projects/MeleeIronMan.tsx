import React from 'react'
import styled from 'styled-components'
import { Project } from '../../StyledComponents'
import melee from '../../images/melee.png'

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
