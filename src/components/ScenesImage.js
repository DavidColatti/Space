import React, { Component } from 'react';
import scenes from '../API/ScenesAPI.json';

class ScenesImage extends Component {
	state = {
		scenesDisplay: [ ...scenes ].splice(0, 3)
	};

	displayScene = () => {
		let scenesDisplay = this.state.scenesDisplay;

		return scenesDisplay.map((scene) => {
			return (
				<div>
					<video width="320" height="240" autoPlay loop>
						<source src={scene.video.url} type="video/mp4" />
					</video>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<button>More Scenes</button>
				{this.displayScene()}
			</div>
		);
	}
}

export default ScenesImage;
