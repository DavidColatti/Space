import React, { Component } from 'react';
// import SignUp from './SignUp';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="Home">
			
				<div className="UpperHeader">
					<img src="spacename.png" alt="space name" />

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
