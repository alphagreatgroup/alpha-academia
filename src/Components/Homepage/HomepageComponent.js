import React from "react";
import "./HomepageComponentStyles.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import laptopStudent from "../../images/student-with-laptop.png";
import bookStudent from "../../images/student-with-book.png";

import Packages from "./Package/Packages";
import Tutors from "./Tutor/Tutors";

import Testimonials from "./Testimonial/Testimonials";
import SignUp from "./Signup/Signup";
import Institutions from "./Institutions/Institutions";
import scores from "../../images/scores.png";

function HomepageComponent() {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <p className="text-start h1">
              <span className="crimson">learn</span> and{" "}
              <span className="crimson">train</span> with alpha academia
            </p>
          </Row>
          <Row>
            <Col md={12}>
              <p className="text-start">
                a platform that offers wide range of tutoring and test prep
                packages for everyone.{" "}
              </p>
            </Col>
          </Row>
          <Row className="text-start">
            <Col>
              <button>Get started</button>
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            alt="student"
            src={laptopStudent}
            className="position-relative"
            style={{ top: "-10%", left: "-13%", width: "120%" }}
          />
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "var(--crimson)", marginTop: "-10%" }}
        className="p-4 w-75 mx-auto text-white rounded"
      >
        <Col>
          <p className="h1">100%</p>
          <p>university acceptance rate</p>
        </Col>
        <Col>
          <p className="h1">50%</p>
          <p>students have had their lives changed</p>
        </Col>
        <Col>
          <p className="h1">8+</p>
          <p>years of experience</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img
            src={bookStudent}
            className="img-fluid w-75 grayscale-img"
            alt="student"
          />
        </Col>
        <Col>
          <Row>
            <p className="h1 text-start">
              It is <span className="crimson">possible</span> to understand, if
              you receive the <span className="crimson">right support</span>.
            </p>
          </Row>
          <Row>
            <p className="text-start">
              We have a collection of experienced private home tutors in many
              cities of Ghana, so depending on your location, we can get you a
              home tutor to come or schedule an online class to help improve
              your performance at home.
            </p>
          </Row>
          <Row className="text-start">
            <Col>
              <button className="text-start">Book a teacher</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5 p-5 perfect-score">
        <Col md={6}>
          <Row>
            <p className="h1 text-start">
              The score can be <span className="crimson">perfected</span> with a
              push <span className="crimson">here</span> and{" "}
              <span className="crimson">there</span>.
            </p>{" "}
          </Row>
          <Row>
            <p className=" text-start">
              With the use of our effective and practical approach system such
              as Afterschool Classes, Weekends Classes, Vacation Classes etc.
              for student we can make the dream school a reality..
            </p>
          </Row>
          <Row className="text-start">
            <Col>
              <button>Let's perfect it</button>
            </Col>
          </Row>
        </Col>
        <Col>
          <img src={scores} className="img-fluid" alt="" />
        </Col>
      </Row>
      <Packages />
      <Tutors />
      <Testimonials />
      <SignUp />
      <Institutions />
    </Container>
  );
}

export default HomepageComponent;
