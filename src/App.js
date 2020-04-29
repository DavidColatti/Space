import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
			<video autoPlay loop id="videobackground" contols="false">
					<source src="meadow.mp4" type="video/mp4" />
				</video>
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
				</Switch>
			</div>
		);
	}
}
export default App;
