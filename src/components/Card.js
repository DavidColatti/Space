import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard className="card">
        <Link
          key={props.id}
		          to={"/Meditate/" + props.id}
		        >
        <MDBCardImage className="img-fluid" src={props.background_image?.url} />
        </Link>
          <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;