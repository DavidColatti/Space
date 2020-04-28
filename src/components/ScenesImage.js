import React, { Component } from 'react';
import scenes from '../API/ScenesAPI.json';

class ScenesImage extends Component {
	displayScene = () => {
		return (
			<div>
				<video width="320" height="240" autoPlay loop>
					<source src={scenes.scenes[0].video.url} type="video/mp4" />
				</video>
			</div>
		);
	};

	render() {
		return <div>{this.displayScene()}</div>;
	}
}

export default ScenesImage;
