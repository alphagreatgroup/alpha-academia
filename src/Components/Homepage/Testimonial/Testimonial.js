import React from "react";

import "./TestimonialStyles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Brown from "../../../images/Brown.png";

function Testimonial(props) {
  return (
    <div>
      <Row>
        <Col md={1} className="text-start">
          <img src={Brown} className="img-fluid testifier" />
        </Col>
        <Col>
          <p className="text-start">Nicholas Brown</p>
          <p className="text-start">Student</p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <p className="w-50 text-start">
            Alpha academea makes studying enjoyable. I've always struggled to
            study for the GRE's Quant section. I now understand and can solve
            every QUANT problem as a result of the one-on-one tutorial.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Testimonial;
