import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	// display: flex;
`

const Paragraph = styled.p`
	font-family: 'Times New Roman', Times, serif;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
`

const SubHeading = styled.h2`
	font-family: 'Times New Roman', Times, serif;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
`

const ParapraphBold = styled.p`
	font-family: 'Times New Roman', Times, serif;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
`

const Heading = styled.h1`
	font-family: 'Times New Roman', Times, serif;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	margin: auto;
`

const LeftSubHeading = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	float: left;
	margin-left: 600px;
`

const RightSubHeading = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	float: right;
	margin-right: 600px;
`

const LeftParagraph = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	/* line-height: 16px; */
	float: left;
	margin-left: 600px;
`

const RightParagraph = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	/* line-height: 16px; */
	float: right;
	margin-right: 600px;
`

const CenterParagraph = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	text-align: center;
`

const FlexCenter = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	margin-left: 500px;
	margin-right: 500px;
`

const Clear = styled.div`
	clear: both;
`

const Reference = styled.div`
	font-family: Tahoma;
	font-style: normal;
	font-size: 12px;
	line-height: 0px;
	margin-left: 30px;
`

function Resume() {
	return (
		<Wrapper>
			<Heading>Carlisle Miller</Heading>
			<CenterParagraph>
				Software Developer - Brisbane, Australia
			</CenterParagraph>
			<CenterParagraph>
				https://github.com/CarlisleM | 0466-813-367 | carlisle.m@hotmail.com
			</CenterParagraph>

			<Clear />
			<hr></hr>
			<Heading>Qualifications</Heading>
			<LeftParagraph>Griffith University (Brisbane, Australia)</LeftParagraph>
			<Clear />
			<LeftParagraph>Bachelor of Software Engineering</LeftParagraph>

			<RightParagraph>
				<b>July 2013 - July 2018</b>
			</RightParagraph>

			<Clear />
			<hr></hr>
			<Heading>Experience</Heading>

			<b>
				<LeftSubHeading>Codafication </LeftSubHeading>
				<RightSubHeading>Brisbane, Australia</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>Software Engineer</LeftParagraph>
			<RightParagraph>
				<b>January 2021 - Present</b>
			</RightParagraph>
			<Clear />
			<LeftParagraph>
				<li>Develop reusable React components</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Coin Crew Games</LeftSubHeading>
				<RightSubHeading>Los Angeles, California</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>Junior Software Engineer</LeftParagraph>
			<RightParagraph>
				<b>February 2020 - June 2020</b>
			</RightParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Contributed to the development of prototyping arcade games using Unity
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Interacted with clients during meetings to discuss project ideas
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Helped with the wiring, hardware installation and software setup of
					arcade cabinets
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Created detailed wiring diagrams of arcade cabinets to be used for
					manufacturing purposes
				</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Two Bit Circus</LeftSubHeading>
				<RightSubHeading>Los Angeles, California</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>Game Tech / Game Attendant</LeftParagraph>
			<RightParagraph>
				<b>September 2019 – March 2020</b>
			</RightParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Fix any technical issues in the park whether it be games crashing or
					equipment breaking
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Responsible for maintaining arcade cabinets and doing regular
					inspections and repairs
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Responsible for shutting down the entire park and cleaning all the
					arcade cabinets
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Interacted with customers to demonstrate and explain games and show
					correct usage of equipment
				</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>
					Queensland Micro- and Nanotechnology Centre
				</LeftSubHeading>
				<RightSubHeading>Brisbane, Australia</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>Junior Software Engineer</LeftParagraph>
			<RightParagraph>
				<b>November 2017 - July 2018</b>
			</RightParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Developed a fully automated system with batch processing from scratch
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Tracks and analyze droplet images using MATLAB’s Image Processing
					Toolbox
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Formulated methods to calculate a droplets advancing & receding angle
					using the data collected
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Created algorithms to determine the location and size of droplets
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Obtained more accurate measurements faster than current systems</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Activate Entertainment</LeftSubHeading>
				<RightSubHeading>Brisbane, Australia</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>Software Developer</LeftParagraph>
			<RightParagraph>
				<b>July 2016 - November 2016</b>
			</RightParagraph>
			<Clear />

			<LeftParagraph>
				<li>
					Designed and developed an iPad game to teach kids Empathy using Unity
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Made use of Vuforia to create an augmented reality experience</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Created an assortment of minigames using C# that implemented research
					into helping teach children the feeling of empathy
				</li>
			</LeftParagraph>
			<Clear />
			<hr></hr>
			<Heading>Personal Projects</Heading>
			<b>
				<LeftSubHeading>Sandbox Tile Game</LeftSubHeading>
				<RightSubHeading>November 2020</RightSubHeading>
			</b>
			<Clear />

			<LeftParagraph>
				<li>Created using C# in the Unity game engine</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Uses simple UI elements that scale with screen size for a user
					friendly experience
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Players can construct their own village by placing various tiles
					around the map
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Makes use of global variables to keep track of money and other
					resources
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Players can save/load player data</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Works on both PC and mobile devices</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>
					Site scraper / Database (Python/EJS/React/PostgreSQL)
				</LeftSubHeading>
				<RightSubHeading>March 2019 / October 2020</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>
				<li>
					Created using Python in conjunction with Selenium & Python’s
					BeautifulSoup library
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Pulls data and statistics from both static and dynamic sites</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Inputs collected data into a database using Python/Postgres</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Displays a visual representation of the data using html/jQuery</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Written in EJS and then remade in React in October 2020</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Advertisement Bot</LeftSubHeading>
				<RightSubHeading>Dec 2018</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>
				<li>
					Created an automated way of advertising any message to strangers on
					the site ‘Omegle’
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Bot was created using Java combined with Selenium in Eclipse and later
					rewritten in Python
				</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Automate OBS Recording</LeftSubHeading>
				<RightSubHeading>Oct 2018</RightSubHeading>
			</b>
			<Clear />
			<LeftParagraph>
				<li>
					Makes use of image analysis tools to detect and analyze game screens
					using Java
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Determines when to start and stop recording matches based on analysis
				</li>
			</LeftParagraph>

			<Clear />

			<b>
				<LeftSubHeading>Discord Bot</LeftSubHeading>
				<RightSubHeading>Sept 2018</RightSubHeading>
			</b>

			<LeftParagraph>
				<li>Automatically pulls player and match data of eSport tournaments</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>Posts match data to a discord server as tournaments progress</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					Created using Javascript to obtain JSON data via the smash.gg API
				</li>
			</LeftParagraph>

			<Clear />
			<hr></hr>

			<Heading>Skills</Heading>

			<Heading>Experienced</Heading>
			<LeftParagraph>
				<li>
					<b>Languages:</b> Java, Python, SQL, C#
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					<b>Web development:</b> HTML, CSS, Javacsript, Selenium, NodeJS, EJS,
					React
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					<b>Development Tools:</b> Unity, Eclipse, Github, MATLAB, Visual
					Studio
				</li>
			</LeftParagraph>
			<Clear />
			<LeftParagraph>
				<li>
					<b>Database:</b> Oracle SQL, PostgreSQL
				</li>
			</LeftParagraph>

			<Clear />
			<Heading>Familiar</Heading>
			<LeftParagraph>
				<li>
					<b>Languages:</b>C, PHP, Assembly
				</li>
			</LeftParagraph>
			<Clear />
			<hr></hr>
			<Heading>References</Heading>
			{/* <LeftParagraph>Mike Salyh</LeftParagraph>
			<CenterParagraph>Jamie Presseley</CenterParagraph>
			<RightParagraph>Patrick Tan</RightParagraph> */}

			<FlexCenter>
				<Reference style={{ textAlign: 'left' }}>
					<p>
						<b>Mike Salyh</b>
					</p>
					<p>
						<b>Coin Crew Games</b>
					</p>
					<p>mike@coincrew.games</p>
					<p>508-801-3337</p>
				</Reference>
				<Reference style={{ textAlign: 'left' }}>
					<p>
						<b>Jamie Pressley</b>
					</p>
					<p>
						<b>Two Bit Circus</b>
					</p>
					<p>jamie.pressley</p>
					<p>828-989-8750</p>
				</Reference>
				<Reference style={{ textAlign: 'right' }}>
					<p>
						<b>Patrick Tan</b>
					</p>
					<p>
						<b>Queensland Micro-</b>
					</p>
					<p>
						<b>& Nanotechnology Center</b>
					</p>

					<p>(61) 449-267-201</p>
				</Reference>
			</FlexCenter>
		</Wrapper>
	)
}

export default Resume
