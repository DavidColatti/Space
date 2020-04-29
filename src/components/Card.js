import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = (props) => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard className="card">
        <MDBCardImage className="img-fluid" src={props.background_image?.url} />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the cards content.</MDBCardText>
          <MDBBtn href="#">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;