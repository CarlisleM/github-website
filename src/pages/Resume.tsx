import React from 'react'

function Resume() {
	return (
		<div className='Resume'>
			Resume Page!
			<div className='resume-center'>
				<h1>Carlisle Miller</h1>
				<p>carlisle.m@hotmail.com</p>
				<p>Brisbane, Australia</p>
				<p>Github: https://github.com/CarlisleM</p>
				<hr></hr>
				<p>Highly motivated Software Engineering graduate</p>
				<hr></hr>
				<div className='resume-left'>
					<h1>Employment History</h1>
					<p>
						Queensland Micro- and Nanotechnology Centre – Brisbane, Australia
					</p>
					<p>Junior Software Engineer</p>
					<div className='indent-resume-points'>
						<li>
							Developed a fully automated system with batch processing from
							scratch to track and analyze droplets using MATLAB’s Image
							Processing Toolbox
						</li>
						<li>
							Obtained more accurate measurements faster than current systems
						</li>
						<li>
							Determined measurements unable to be obtained by other software
						</li>
					</div>
					<p>Timezone – Brisbane, Australia</p>
					<p>Duty Manager/Technician</p>
					<div>
						<li>Maintained a variety of arcade machines during shifts</li>
						<li>
							Served customers using a POS system, handled stock and banking
						</li>
					</div>
				</div>

				<hr></hr>
				<div className='resume-left'>
					<h1>Personal Projects</h1>
					<p>Discord Bot</p>
					<div>
						<li>Posts when livestreams of the tournament go live</li>
						<li>
							Posts entrants details and tracks match updates via the smash.gg
							API
						</li>
						<li>
							Posts results of matches as results are entered to a discord
							server
						</li>
					</div>
					<p>Automatic Tournament Recording System</p>
					<div>
						<li>Detects the color of pixels on the screen using Java</li>
						<li>
							Compares current screen to different game screens to determine
							whether to start or stop recording a match
						</li>
					</div>
				</div>
				<hr></hr>
				<div className='resume-left'>
					<h1>Qualifications</h1>
					<div className='indent-resume-points'>
						<li className='p-spacing'>
							2018: Bachelor of Software Engineering (Griffith University)
						</li>
						<li>2012: Graduated from Redeemer Lutheran College</li>
					</div>
				</div>
				<hr></hr>
				<div className='resume-left'>
					<h1>Referees</h1>
					<p>Dr Patrick Tan</p>
					<p>Researcher at Queensland Micro- and Nanotechnology Centre</p>
					<p>Phone: 0449 267 201</p>
					<p>Email: sayhwa.tan@griffith.edu.au</p>
					{/* </br> */}
					<p>Allan Young</p>
					<p>Timezone Store Manager</p>
					<p>Phone: 0402 175 193</p>
				</div>
			</div>
		</div>
	)
}

export default Resume
