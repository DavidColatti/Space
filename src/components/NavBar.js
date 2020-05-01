import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<img src="spacename.png" alt="space name" className="nav-img" />
				<ul className="nav-list">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Meditate">Meditate</Link>
					</li>
					<li>
						<Link to="/Scenery">Scenery</Link>
					</li>
					<li>
						<Link to="/">Music</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
