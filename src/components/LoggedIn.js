import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ScenesImage from './ScenesImage';

class LoggedIn extends Component {
	state = {
		displayHome: true,
		displayScenes: false,
		displayMeditate: false,
		displaySleep: false
	};

	makeNavBar = () => {
		return (
			<nav>
				<ul>
					<li>
						<button onClick={() => this.setState({ displayHome: !this.state.displayHome })}>Home</button>
					</li>
					<li>
						<button onClick={() => this.setState({ displayScenes: !this.state.displayScenes })}>
							Scenes
						</button>
					</li>
					<li>
						<button onClick={() => this.setState({ displayMeditate: !this.state.displayMeditate })}>
							Meditate
						</button>
					</li>
					<li>
						<button onClick={() => this.setState({ displaySleep: !this.state.displaySleep })}>Sleep</button>
					</li>
				</ul>
			</nav>
		);
	};

	displayContent = () => {
		if (this.state.displayHome) {
			return <div>DISPLAYING HOME</div>;
		} else if (this.state.displayScenes) {
			return <ScenesImage />;
		} else if (this.state.displayMeditate) {
			return <div>DISPLAYING MEDITATE</div>;
		} else if (this.state.displaySleep) {
			return <div>DISPLAYING SLEEP</div>;
		}
	};

	render() {
		return (
			<div>
				<div>{this.makeNavBar()}</div>
				<div>{this.displayContent()}</div>
			</div>
		);
	}
}

export default LoggedIn;
