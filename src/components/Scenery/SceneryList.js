import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import scenes from '../../API/ScenesAPI.json';
import NavBar from '../NavBar';
import SceneryCard from './SceneryCard';

class Scenery extends Component {
	state = {
		scenes: scenes
	};

	displayList = () => {
		let scenesCopy = [ ...this.state.scenes ];

		let rows = [];

		for (let r = 0; r < scenesCopy.length; r++) {
			if (scenesCopy[r + 3]) {
				if (r % 4 === 0) {
					rows.push(
						<MDBRow>
							<MDBCol md="3">
								<SceneryCard {...scenesCopy[r]} />
							</MDBCol>
							<MDBCol md="3">
								<SceneryCard {...scenesCopy[r + 1]} />
							</MDBCol>
							<MDBCol md="3">
								<SceneryCard {...scenesCopy[r + 2]} />
							</MDBCol>
							<MDBCol md="3">
								<SceneryCard {...scenesCopy[r + 3]} />
							</MDBCol>
						</MDBRow>
					);
				}
			}
		}
		console.log(rows);
		return rows;
	};

	render() {
		console.log(this.state.scenes);
		return (
			<div>
				<NavBar />
				<div className="meditateList">
					<MDBContainer fluid="true">{this.displayList()}</MDBContainer>
				</div>
			</div>
		);
	}
}

export default Scenery;
