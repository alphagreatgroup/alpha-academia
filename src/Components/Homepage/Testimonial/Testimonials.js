import React from "react";

import "./TestimonialStyles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Brown from "../../../images/Brown.png";
import Fred from "../../../images/Fred.png";
import Grace from "../../../images/Grace.png";
import Yaayra from "../../../images/Yaayra.png";

import Testimonial from "./Testimonial";

function Testimonials(props) {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h2 className="h1 text-start">What our clients think about us</h2>
        </Col>
        <Col className="text-end">
          <button>Explore more</button>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <Testimonial
            style={{ backgroundColor: "#F1EFEF", color: "#000000" }}
            imagePath={Brown}
            name="Nicholas Brown"
            role="Student"
            testimony="Alpha academea makes studying enjoyable. I've always struggled to
          study for the GRE's Quant section. I now understand and can solve
          every QUANT problem as a result of the one-on-one tutorial."
          />
        </Col>
        <Col>
          <Testimonial
            style={{ backgroundColor: "#000000", color: "#fff" }}
            imagePath={Fred}
            name="Frederick Yalley"
            role="Tutor"
            testimony="I have the chance to set up a time with my students to present in-depth knowledge. I get paid for that thanks to alpha academea."
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={7}>
          <Testimonial
            style={{ backgroundColor: "#990000", color: "#fff" }}
            imagePath={Grace}
            name="Grace Essuman"
            role="Parent"
            testimony="My child has learned so much from alpha academea program. The minute he started at alpha academea, I saw improvement  in his mathematics, english and science courses taught at school."
          />
        </Col>
        <Col>
          <Testimonial
            style={{ backgroundColor: "#7A7979", color: "#fff" }}
            imagePath={Yaayra}
            name="Yayra Ametephe"
            role="Student"
            testimony="The course was well organized and my tutor was approachable. I really appreciated the examples and the trial questions because it helped me to understand the topic that was taught.  I recommend it to all parents and students, It’s well worth the time and money. "
          />
        </Col>
      </Row>
    </div>
  );
}

export default Testimonials;
