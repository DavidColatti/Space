import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import meditate from '../API/MeditateAPI.json';
import './MeditateList.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Card from './Card';
// import NavBar from './NavBar';

class MeditateList extends Component {
	state = {
		programs: meditate.meditate.programs
	};

	displayList = () => {
		this.state.programs.splice(59, 1);
		let programsCopy = [ ...this.state.programs ];

		// let columns = programsCopy.map((each) => {
		//   return (
		//     <MDBCol md="4">
		//       <div className="meditateList">
		//         <Link
		//           key={each.id}
		//           className="list-group-item list-group-item-action active"
		//           to={"/Meditate/" + each.id}
		//         >
		//           {each.title}
		//         </Link>
		//         <div className="meditateElement">
		//           <img width="100px" src={each.background_image?.url} alt="icon" />
		//         </div>
		//       </div>
		//     </MDBCol>
		//   );
		// });

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
				{/* <NavBar /> */}
<<<<<<< HEAD
				<div className="meditateList">
          <MDBContainer fluid=
          'true'>{this.displayList()}</MDBContainer>
				</div>
=======
				{this.state.programs ? (
					<div className="meditateList">
						<MDBContainer>{this.displayList()}</MDBContainer>
					</div>
				) : (
					<h1>LOADING</h1>
				)}
>>>>>>> 653124c9f793991aaceaf509ea39b2171441e06a
			</div>
		);
	}
}

export default MeditateList;
