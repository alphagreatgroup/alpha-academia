import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Tutor from "./Tutor";

import Danny from "../../../images/Danny.png";
import Fred from "../../../images/Fred.png";
import Jess from "../../../images/Jess.png";

function Tutors() {
  return (
    <div>
      <Row>
        <Col>
          <h2 className="h1 text-start">Find the best tutor here</h2>
        </Col>
        <Col className="text-end">
          <button>Explore more</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <Tutor
              rating="4.0"
              name="Daniel Bontii"
              courses="Javascript, Java and PHP"
              home="America"
              imagePath={Danny}
            />
          </Col>
        </Col>
        <Col>
          <Tutor
            rating="4.5"
            name="Anne Mensah"
            courses="IELTS and SAT"
            home="Oyarifa"
            imagePath={Jess}
          />
        </Col>
        <Col>
          <Tutor
            rating="4.0"
            name="Frederick Yalley"
            courses="GRE, GMAT and TOFEL"
            home="America"
            imagePath={Fred}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Tutors;
