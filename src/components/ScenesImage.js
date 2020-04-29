import React, { Component } from 'react';
import scenes from '../API/ScenesAPI.json';
import { Link } from 'react-router-dom';

class ScenesImage extends Component {
	state = {
		scenesDisplay: [ ...scenes ]
	};

	displayScene = () => {
		let scenesDisplay = this.state.scenesDisplay;

		return scenesDisplay.map((scene) => {
			return (
				<div>
					{/* <video width="320" height="240" autoPlay loop>
						<source src={scene.video.url} type="video/mp4" />
					</video> */}
					<Link
						key={scene.id}
						className="list-group-item list-group-item-action active"
						to={'/Meditate/' + scene.id}
					>
						{scene.title}
					</Link>
				</div>
			);
		});
	};

	render() {
		console.log(scenes);
		return (
			<div>
				<button>More Scenes</button>
				{this.displayScene()}
			</div>
		);
	}
}

export default ScenesImage;
