import React, { Component } from 'react';
import NavBar from '../NavBar';
import VideoCard from './VideoCard';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const apiKey = 'AIzaSyBbYj_H9XZKotGaFHkCPcFw97kxdg-VFUk';
const channelID = 'UCM7XCXnxtYJkkMN0zf0tsSw';
var limit = 12;
var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${limit}`;

class Videos extends Component {
	componentDidMount = () => {
		this.getYoutubeData();
	};

	state = {
		videos: []
	};

	getYoutubeData = () => {
		fetch(url).then((res) => res.json()).then((res) => {
			// console.log(res);
			this.setState({
				videos: res.items || []
			});
		});
	};

	displayList = () => {
		let videosCopy = [ ...this.state.videos ];

		let rows = [];

		for (let r = 0; r < videosCopy.length; r++) {
			if (videosCopy[r + 3]) {
				if (r % 4 === 0) {
					rows.push(
						<MDBRow key={videosCopy[r].id.videoId}>
							<MDBCol md="3">
								<VideoCard {...videosCopy[r]} />
							</MDBCol>
							<MDBCol md="3">
								<VideoCard {...videosCopy[r + 1]} />
							</MDBCol>
							<MDBCol md="3">
								<VideoCard {...videosCopy[r + 2]} />
							</MDBCol>
							<MDBCol md="3">
								<VideoCard {...videosCopy[r + 3]} />
							</MDBCol>
						</MDBRow>
					);
				}
			}
		}

		return rows;
	};

	render() {
		//console.log(this.state.videos);
		// console.log(this)
		return (
			<div>
				<NavBar videos={this.state.videos} />
				<div className="meditateList">
					<MDBContainer fluid={true}>{this.displayList()}</MDBContainer>
				</div>
			</div>
		);
	}
}

export default Videos;
