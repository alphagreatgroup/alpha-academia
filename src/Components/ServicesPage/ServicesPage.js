import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TutorOption from "./TutorOption";
import InHouseTutor from "../../images/in-house-tutor.png";
import OnlineTutor from "../../images/online-tutor.png";
import TestPrepping from "../../images/test-prepping.png";

const ServicesPage = () => {
  return (
    <>
      <Container className="text-start">
        <Row>
          <Col>
            <h1>Tutoring</h1>
            <p className="lh-base">
              We offer quality tutoring service for students at all levels and
              in STEM subjects. We have a collection of experienced private home
              tutors in many cities of Ghana, so depending on your location, we
              can get you a home tutor to come help improve your child’s
              performance at home. These are our packages
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <TutorOption
              text="online tutoring"
              bg={InHouseTutor}
              color={"rgba(0, 0, 0, 0.5)"}
            />
          </Col>
          <Col>
            <TutorOption
              text="in-home tutoring"
              bg={OnlineTutor}
              color={"rgba(153, 0, 0, 0.5)"}
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h2 className="h1">
              Test <span className="crimson text">prepping</span>
            </h2>
            <p className="lh-base text-secondary">
              We offer test prepping and train students to perform well on
              various examinations. You can choose to receive one-on-one
              instruction or we can group you with other students who share your
              interests in order to train and get you ready for your upcoming
              test. The offers are ranges from international to local
              examinations.
            </p>
            <button>Register</button>
          </Col>
          <Col>
            <div className="prep-box"></div>
            <img src={TestPrepping} alt="Test Prepping" className="w-100 p-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesPage;
