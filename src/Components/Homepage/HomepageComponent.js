import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import laptopStudent from "../../images/student-with-laptop.png";
import bookStudent from "../../images/student-with-book.png";

import Pacakge from "./Package/Package";

import cedi from "../../images/cedi.png";
import teacher from "../../images/teacher.png";
import student from "../../images/student.png";
import studentR from "../../images/student reading.png";

function HomepageComponent() {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Row>
            <p className="text-start h1">Learn and train with alpha academia</p>
          </Row>
          <Row>
            <p className="text-start">
              a platform that offers wide range of tutoring and test prep
              packages for everyone.{" "}
            </p>
          </Row>
          <Row className="text-start">
            <Col>
              <button>Get started</button>
            </Col>
          </Row>
        </Col>
        <Col>
          <img src={laptopStudent} className="img-fluid" />
        </Col>
      </Row>
      <Row>
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
          <img src={bookStudent} className="img-fluid" />
        </Col>
        <Col>
          <Row>
            <p className="h1 text-start">
              It is possible to understand, if you receive the right support.
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
      <Row className="mt-5">
        <Col>
          <Row>
            <p className="h1 w-50 text-start">
              The score can be perfected with a push here and there.
            </p>{" "}
          </Row>
          <Row>
            <p className="w-50 text-start">
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
      </Row>
      <p className="mt-5 text-start h1 w-50">
        Why learn and prep with Alpha academea?
      </p>
      <Row>
        <Col>
          <Pacakge
            imagePath={cedi}
            alt="cedi symbol"
            heading="Affordable Packages"
            intro="we have made every package in a way to suit your budget"
          />
        </Col>
        <Col>
          <Pacakge
            imagePath={teacher}
            alt="teacher symbol"
            heading="Experienced Tutors"
            intro="we have certified and well trained tutors that attend to the needs of every student"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Pacakge
            imagePath={student}
            alt="student symbol"
            heading="One-on-one tutorials"
            intro="This makes tutor address your problem alone and devote their to make you understand "
          />
        </Col>
        <Col>
          <Pacakge
            imagePath={studentR}
            alt="student reading symbol"
            heading="Comprehensive content"
            intro="we have our student at heart therefore we are mindful about the content  deliver"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="h1 text-start">Find the best tutor here</p>
        </Col>
        <Col className="text-end">
          <button>Explore more</button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomepageComponent;
