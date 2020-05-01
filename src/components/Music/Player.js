import React, { Component } from 'react';

class Player extends Component {
	state = {
		showingTracks: false
	};

	displayTracks = () => {
		this.setState({
			showingTracks: true
		});
	};

	showTracks = () => {
		let track = [ ...this.props.track ];

		return track.map((each) => {
			return (
				<li>
					<div>{each.track.name}</div>
					<audio controls src={each.track.preview_url} />
				</li>
			);
		});
	};

	render() {
		return (
			<div>
				<ul>
					<button
						onClick={() => {
							this.displayTracks();
						}}
					>
						Show Song List
					</button>
					{this.state.showingTracks ? this.showTracks() : ''}
				</ul>
			</div>
		);
	}
}

export default Player;
