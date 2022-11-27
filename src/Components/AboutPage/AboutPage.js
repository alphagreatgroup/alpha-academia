import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Daniel from "../../images/daniel.png";
import Fiifi from "../../images/fiifi.png";
import Gordon from "../../images/gordon.jpg";
import OurMission from "../../images/our_mission.png";
import Donkor from "../../images/Donkor.png";
import Christopher from "../../images/Christopher.png";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <h1 className="text-start">
              Meet the <span className="crimson">great</span> team behind this
              <span className="crimson"> operation</span>
            </h1>
            <p className="text-start text-secondary fs-4">
              Our team comes with avid and varied knowledge and skillsets in the
              field of Information Technology and Product Development
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-3 mt-5">
          <Col>
            <img
              src={Daniel}
              alt="Daniel Bontii"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Daniel Bontii</h3>
            <p className="fs-5 fw-bold text-secondary">
              Head of Alpha Pi /<br /> Senior Developer
            </p>
          </Col>
          <Col>
            <img
              src={Donkor}
              alt="Emmanuel Donkor"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Emmanuel Donkor</h3>
            <p className="fs-5 fw-bold text-secondary">Operations Manager</p>
          </Col>
          <Col>
            <img
              src={Gordon}
              alt="Theophilus Gordon"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Theophilus Gordon</h3>
            <p className="fs-5 fw-bold text-secondary">Product Manager</p>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-3 mt-5 offset-md-3">
          <Col>
            <img
              src={Fiifi}
              alt="Fiifi Appiah"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Fiifi Appiah</h3>
            <p className="fs-5 fw-bold text-secondary">UX/UI Designer</p>
          </Col>
          <Col>
            <img
              src={Christopher}
              alt="Christopher Huago Addo"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Christopher Huago Addo</h3>
            <p className="fs-5 fw-bold text-secondary">Financial Officer</p>
          </Col>
        </Row>
        <button>view more</button>
        <Row className="mt-5 row-cols-1 row-cols-md-2">
          <Col>
            <h2 className="text-start">
              Our <span className="crimson">Mission</span>
            </h2>
            <p className="text-start text-secondary fs-5">
              We believe that we are on this earth to improve and make life
              better. Our goal is to empower students to apply knowledge
              acquired in science, mathematics and technology to innovate and
              solve problems thus creating a better and a more sustainable world
              for us all; To build a great organization that attracts, develops,
              excites and retains exceptional STEM field professionals and
              thought leaders with high ethical standards.
            </p>
            <p className="text-start text-secondary fs-5">
              We also believe that getting the foundation is very important
              therefore we are willing to set that strong foundation and and
              help you build upon that foundation.
            </p>
          </Col>
          <Col>
            <img src={OurMission} alt="" className="w-75" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
