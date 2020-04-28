import React, { Component } from 'react';
import SignUp from './SignUp';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div>
					<nav>
						{/* <img src="../Images/textlogo.png" alt="text logo" /> */}
						<h1>SPACE</h1>
					</nav>
				</div>
				<div>
					<SignUp />
				</div>
			</div>
		);
	}
}

export default Home;
