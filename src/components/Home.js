import React, { Component } from 'react';
// import SignUp from './SignUp';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<video autoPlay loop id="videobackground" contols="false">
					<source src="meadow.mp4" type="video/mp4" />
				</video>

				<div className="UpperHeader">
					<img src="spacename.png" alt="space name" />

					<p className="header-text"> Find your peace, get your space.</p>

					<div className="LowerHeader">
						{/* <a class="myButton"><SignUp /></a> */}
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
