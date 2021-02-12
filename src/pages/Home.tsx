import React from 'react'
import selfie from '../images/carlisle.jpg'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'

function Home() {
	const handlers = useSwipeable({
		onSwiped: (eventData) => console.log('User Swiped!', eventData),
	})

	return (
		<div {...handlers}>
			<div>
				<u>
					<h1>About Me</h1>
				</u>
			</div>
			<img
				src={selfie}
				alt='Logo'
				style={{ width: '80%', border: 'solid #00b5fc 2px' }}
			/>
			<p>Software Engineer</p>
		</div>
	)
}

export default Home
