import React from "react";

import Package from "./Package";

import cedi from "../../../images/cedi.png";
import teacher from "../../../images/teacher.png";
import student from "../../../images/student.png";
import studentR from "../../../images/student reading.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Packages() {
  return (
    <>
      <p className="mt-5 text-start h1 w-50">
        Why learn and prep with Alpha academea?
      </p>
      <Row>
        <Col>
          <Package
            imagePath={cedi}
            alt="cedi symbol"
            heading="Affordable Packages"
            intro="we have made every package in a way to suit your budget"
          />
        </Col>
        <Col>
          <Package
            imagePath={teacher}
            alt="teacher symbol"
            heading="Experienced Tutors"
            intro="we have certified and well trained tutors that attend to the needs of every student"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Package
            imagePath={student}
            alt="student symbol"
            heading="One-on-one tutorials"
            intro="This makes tutor address your problem alone and devote their to make you understand "
          />
        </Col>
        <Col>
          <Package
            imagePath={studentR}
            alt="student reading symbol"
            heading="Comprehensive content"
            intro="we have our student at heart therefore we are mindful about the content  deliver"
          />
        </Col>
      </Row>
    </>
  );
}

export default Packages;
