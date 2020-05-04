import React, { Component } from 'react';
import meditate from '../API/MeditateAPI.json';
import './MeditateList.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Card from './Card';
import NavBar from './NavBar';

class MeditateList extends Component {
	state = {
		programs: meditate.meditate.programs
	};

	displayList = () => {
		this.state.programs.splice(59, 1);
		let programsCopy = [ ...this.state.programs ];

		let rows = [];

		for (let r = 0; r < programsCopy.length; r++) {
			if (programsCopy[r + 3]) {
				if (r % 4 === 0) {
					rows.push(
						<MDBRow>
							<MDBCol md="3">
								<Card {...programsCopy[r]} />
							</MDBCol>
							<MDBCol md="3">
								<Card {...programsCopy[r + 1]} />
							</MDBCol>
							<MDBCol md="3">
								<Card {...programsCopy[r + 2]} />
							</MDBCol>
							<MDBCol md="3">
								<Card {...programsCopy[r + 3]} />
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
		console.log(this.state.programs);
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

export default MeditateList;
