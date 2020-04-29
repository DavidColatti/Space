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

	displayDetails = () => {
		let program = this.state.program;
		console.log(program);
	};

	render() {
		return <div>{this.displayDetails()}</div>;
	}
}

export default MeditateDetails;
