import React, { Component } from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Meditate from './components/Meditate';
import MeditateDetails from './components/MeditateDetails';
import SceneryList from './components/Scenery/SceneryList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<video autoPlay loop id="videobackground" contols="false">
					<source src="../../meadow.mp4" type="video/mp4" />
				</video>
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/Meditate" render={(props) => <Meditate {...props} />} />
					<Route exact path="/Meditate/:id" render={(props) => <MeditateDetails {...props} />} />
					<Route exact path="/Scenery/" render={(props) => <SceneryList {...props} />} />
				</Switch>
			</div>
		);
	}
}
export default App;
