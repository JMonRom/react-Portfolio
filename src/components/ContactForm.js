import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdbreact';

const ContactForm = () => { 
  return(
<MDBContainer>
  <MDBRow>
    <MDBCol md="6"> 
      <form>
        <p className="h5 text center mb-4"> CONNECT WITH ME</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group-type="text" validate error="wrong" success="right"
          />
          <MDBInput label="Your email" icon="emvelope" group-type="text" validate error="wrong" success="right"
          />
          <MDBInput label="Subject" icon="tag" group-type="text" validate error="wrong" success="right"
          />
          <MDBInput type="textarea" rows="2" icon="pencil-alt" label="Your message"
          />
        </div>
        <div className="text-center">
        <MDBBtn className="btn btn-outline-purple" type="submit">
          Send
          <MDBIcon far icon="paper-plane" className="ml-2"/>
        </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

)};

export default ContactForm;