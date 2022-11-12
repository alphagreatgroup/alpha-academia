import React from "react";

import "./TestimonialStyles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testimonial(props) {
  return (
    <div style={props.style} className="testimonial w-100">
      <Row>
        <div className="d-flex align-items-center">
          <img
            src={props.imagePath}
            className="img-fluid testifier me-3"
            alt={props.name}
          />
          <div className="d-flex flex-column">
            <p className="text-start mb-1 ">{props.name}</p>
            <p className="text-start">{props.role}</p>
          </div>
        </div>
      </Row>
      <Row className="mt-3">
        <Col sm={10}>
          <p className="text-start">{props.testimony}</p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Testimonial;
