import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">Meditate</Link>
					</li>
					<li>
						<Link to="/">Scenery</Link>
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
