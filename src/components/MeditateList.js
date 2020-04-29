import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import meditate from '../API/MeditateAPI.json';
import './MeditateList.css';

class MeditateList extends Component {
	state = {
		programs: meditate.meditate.programs
	};

	
	displayList = () => {
		this.state.programs.splice(59,1)
		let programsCopy = [ ...this.state.programs ]

		return programsCopy.map((each) => {
			return (
				<div>
					<Link
						key={each.id}
						className="list-group-item list-group-item-action active"
						to={'/Meditate/' + each.id}
					>
						{each.title}
					</Link>
					<div className="icon">
						<img width="100px" src={each.background_image?.url} alt="icon" />
					</div>
				</div>
			);
		});
	};

	render() {
		console.log(this.state.programs);
		return <div>{this.displayList()}</div>;
	}
}

export default MeditateList;
