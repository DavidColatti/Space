import React, { Component } from 'react';
import meditate from '../API/MeditateAPI.json';

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
		let narrators = this.state.program.narrators.splice(0, 1);
		console.log(narrators);

		return narrators.map((each) => {
			return (
				<div>
					<div>
						<img width="100px" src={each.headshot.url} />
						<h3>{each.name}</h3>
						<h3>{each.display_title}</h3>
					</div>
					<div>
						<h4>{each.short_bio}</h4>
						<h6>{each.bio}</h6>
					</div>
				</div>
			);
		});
	};

	getGuides = () => {
		let guides = this.state.program.guides;
		console.log(guides);

		return guides.map((each) => {
			return (
				<div>
					<h4>{each.title}</h4>
					<audio controls src={each.audio.url} />
				</div>
			);
		});
	};

	displayDetails = () => {
		let program = this.state.program;

		return (
			<div>
				<div className="title">
					<h1>{program.title}</h1>
					<h2>{program.description}</h2>
				</div>
				<div className="narrators">{this.getNarrators()}</div>
				<div className="guides">{this.getGuides()}</div>
			</div>
		);
	};

	render() {
		return <div>{this.state.program ? this.displayDetails() : ''}</div>;
	}
}

export default MeditateDetails;
