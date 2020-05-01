import React, { Component } from 'react';
import scenes from '../../API/ScenesAPI.json';

class SceneryDetails extends Component {
	state = {
		scene: null
	};

	componentDidMount() {
		let scene;
		const scenesCopy = [ ...scenes ];
		scenesCopy.find((each) => {
			if (each.id === this.props.match.params.id) {
				// console.log(each);
				scene = each;
				return true;
			}
			return false;
		});

		// console.log(program);
		this.setState({
			scene: scene
		});
	}

	displayDetails = () => {
		let scene = this.state.scene;

		return (
			<div>
				<h1>{scene.title}</h1>
				<video autoPlay loop contols="false" width="800px">
					<source src={scene.video.url} type="video/mp4" />
				</video>
				<audio autoPlay loop src={scene.audio.url} />
			</div>
		);
	};

	render() {
		return <div>{this.state.scene ? this.displayDetails() : ''}</div>;
	}
}

export default SceneryDetails;
