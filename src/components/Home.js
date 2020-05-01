import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spacename from '../Images/spacename.png';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="UpperHeader">
					<img src={spacename} alt="space name" />

					<p className="header-text"> Find your peace, get your space.</p>

					<div className="LowerHeader">
						<Link to="/Meditate" className="myButton">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
