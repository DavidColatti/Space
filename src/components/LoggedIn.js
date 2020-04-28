import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class LoggedIn extends Component {
	makeNavBar = () => {
		return (
			<nav>
				<ul>
					<li>
						<button>Home</button>
					</li>
					<li>
						<button>Scenes</button>
					</li>
					<li>
						<button>Meditate</button>
					</li>
					<li>
						<button>Sleep</button>
					</li>
				</ul>
			</nav>
		);
	};

	render() {
		return <div>{this.makeNavBar()}</div>;
	}
}

export default LoggedIn;
