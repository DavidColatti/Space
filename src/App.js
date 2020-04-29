import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';
import LoggedIn from './components/LoggedIn';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/Meditate" render={(props) => <LoggedIn {...props} />} />
				</Switch>
			</div>
		);
	}
}
export default App;
