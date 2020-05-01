import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';

const SceneryCard = (props) => {
	return (
		<MDBCol style={{ maxWidth: '22rem' }}>
			<MDBCard className="card">
				<Link key={props.id} to={'/Scene/' + props.id}>
					<MDBCardImage className="img-fluid" src={props.image.url} />
				</Link>
				<MDBCardBody>
					<MDBCardTitle>{props.title}</MDBCardTitle>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default SceneryCard;
