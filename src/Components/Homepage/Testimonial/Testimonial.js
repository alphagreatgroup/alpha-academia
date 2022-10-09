import React from "react";

import "./TestimonialStyles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testimonial(props) {
  return (
    <div style={props.style} className="testimonial w-100">
      <Row>
        <Col md={2} className="text-start">
          <img src={props.imagePath} className="img-fluid testifier" />
        </Col>
        <Col>
          <p className="text-start">{props.name}</p>
          <p className="text-start">{props.role}</p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <p className="text-start">{props.testimony}</p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Testimonial;
