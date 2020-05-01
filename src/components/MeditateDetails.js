import React, { Component } from 'react';
import meditate from '../API/MeditateAPI.json';
import NavBar from './NavBar';

class MeditateDetails extends Component {
	state = {
		program: null
	};

	componentDidMount() {
		let program;
		const meditateCopy = [ ...meditate.meditate.programs ];
		meditateCopy.find((each) => {
			if (each.id === this.props.match.params.id) {
				// console.log(each);
				program = each;
				return true;
			}
			return false;
		});

		// console.log(program);
		this.setState({
			program: program
		});
	}

	getNarrators = () => {
		// NARRATOR FUNCTION- COLLECT HEADSHOT, NAME, AND TITLE
		let narrators = this.state.program.narrators.splice(0, 1);
		console.log(narrators);

		return narrators.map((each) => {
			return (
				<div className="narrator">
					<div className="narrator-img-name-title">
						<img className="headshot" src={each.headshot.url} alt="headshotimage" />
						<h3 className="narrator-name"> {each.name} </h3>
						<h3 className="narrator-title"> {each.display_title} </h3>
					</div>

					<div className="bio">
						<h4 className="narrator-short-bio">{each.short_bio}</h4>
						<h6 className="narrator-bio"> {each.bio}</h6>
					</div>
				</div>
			);
		});
	};

	getGuides = () => {
		// GUIDE FUNCTION- TITLE AND AUDIO
		let guides = this.state.program.guides;
		console.log(guides);

		return guides.map((each) => {
			return (
				<div>
					<h4 className="guide-title"> {each.title} </h4>
					<audio controls src={each.audio.url} />
				</div>
			);
		});
	};

	displayDetails = () => {
		// DISPLAY DETAIL FUNCTION- PROGRAM, TITLE, NARRATORS, GUIDES
		let program = this.state.program;

		return (
			<div className="program">
				<div className="program-title">
					<h1>{program.title}</h1>
					<h2>{program.description}</h2>
				</div>

				<div className="program-narrator"> {this.getNarrators()} </div>
				<div className="program-guide"> {this.getGuides()} </div>
			</div>
		);
	};

	render() {
		return (
			<div>
				<NavBar />
				<div className="background">{this.state.program ? this.displayDetails() : ''}</div>
			</div>
		);
	}
}

export default MeditateDetails;
