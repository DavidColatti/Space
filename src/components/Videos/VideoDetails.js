import React, { Component } from 'react';
import NavBar from '../NavBar';

class VideoDetails extends Component {
	state = {
		videoId: null
	};

	componentDidMount() {
		this.setState({
			videoId: this.props.match.params.id
		});
	}

	displayVideo = () => {
		return (
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${this.state.videoId}`}
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		);
	};

	render() {
		return (
			<div className="VideoDetails">
				<NavBar />
				<div>{this.state.videoId ? this.displayVideo() : ''}</div>
			</div>
		);
	}
}

export default VideoDetails;
