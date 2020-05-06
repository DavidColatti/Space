import React, { Component } from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Meditate from './components/Meditate';
import MeditateDetails from './components/MeditateDetails';
import SceneryList from './components/Scenery/SceneryList';
import SceneryDetails from './components/Scenery/SceneryDetails';
import Videos from './components/Videos/Videos';
import VideoDetails from './components/Videos/VideoDetails';

class App extends Component {
	render() {
		return (
			<div className="App">
				<video autoPlay loop id="videobackground" muted contols="false">
					<source src="../../mountain.mov" type="video/mp4" />
				</video>
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/Meditate" render={(props) => <Meditate {...props} />} />
					<Route exact path="/Meditate/:id" render={(props) => <MeditateDetails {...props} />} />
					<Route exact path="/Scenery/" render={(props) => <SceneryList {...props} />} />
					<Route exact path="/Scene/:id" render={(props) => <SceneryDetails {...props} />} />
					<Route exact path="/Videos/" render={(props) => <Videos {...props} />} />
					<Route exact path="/Videos/:id" render={(props) => <VideoDetails {...props} />} />
				</Switch>
			</div>
		);
	}
}
export default App;
