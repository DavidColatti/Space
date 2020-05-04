import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
	return (
		<MDBCol style={{ maxWidth: '22rem' }}>
			<MDBCard className="card">
				<Link key={props.id.videoId} to={'/Videos/' + props.id.videoId}>
					<MDBCardImage className="img-fluid" src={props.snippet.thumbnails.high.url} />
				</Link>
				<MDBCardBody>
					<MDBCardTitle>{props.snippet.title}</MDBCardTitle>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default VideoCard;
