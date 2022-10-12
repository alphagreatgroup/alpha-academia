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
        Why <span className="crimson">learn</span> and{" "}
        <span className="crimson">prep</span> with Alpha academea?
      </p>
      <Row>
        <Col md={5}>
          <Package
            imagePath={cedi}
            alt="cedi symbol"
            heading="Affordable Packages"
            intro="we have made every package in a way to suit your budget"
          />
        </Col>
        <Col md={1}>
          <div
            style={{
              border: "2px dashed #D9D9D9",
              height: "85%",
              width: "1px",
            }}
          ></div>
        </Col>
        <Col md={5}>
          <Package
            imagePath={teacher}
            alt="teacher symbol"
            heading="Experienced Tutors"
            intro="we have certified and well trained tutors that attend to the needs of every student"
          />
        </Col>
      </Row>
      <Row>
        <div
          style={{
            border: "2px dashed #D9D9D9",
            width: "100%",
            height: "1px",
            marginTop: "-5%",
          }}
        ></div>
      </Row>
      <Row>
        <Col md={6}>
          <Package
            imagePath={student}
            alt="student symbol"
            heading="One-on-one tutorials"
            intro="This makes tutor address your problem alone and devote their to make you understand "
          />
        </Col>
        <Col md={1}>
          <div
            style={{
              border: "2px dashed #D9D9D9",
              height: "85%",
              width: "1px",
              marginTop: "-3.7rem",
            }}
          ></div>
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
