import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { createBrowserHistory } from 'history'

import LeagueScraper from './pages/projects/LeagueScraper'
import MeleeIronMan from './pages/projects/MeleeIronMan'
import OBSAutoRecord from './pages/projects/OBSAutoRecord'
import OmegleBot from './pages/projects/OmegleBot'
import ScoreBoar from './pages/projects/ScoreBoar'

const history = createBrowserHistory()

function App() {
	return (
		<div className='App'>
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/resume'>
							<Resume />
						</Route>

						<Route path='/league-scraper'>
							<LeagueScraper />
						</Route>
						<Route path='/melee-iron-man'>
							<MeleeIronMan />
						</Route>
						<Route path='/obs-auto-record'>
							<OBSAutoRecord />
						</Route>
						<Route path='/omegle-bot'>
							<OmegleBot />
						</Route>
						<Route path='/score-boar'>
							<ScoreBoar />
						</Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		</div>
	)
}

export default App
