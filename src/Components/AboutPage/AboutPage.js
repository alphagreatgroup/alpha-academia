import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import Daniel from "../../images/daniel.png";
import Paul from "../../images/Paul.png";
import Default from "../../images/default.png";
import Fiifi from "../../images/fiifi.png";
import Delight from "../../images/Delight.png";
import OurMission from "../../images/our_mission.png";
import NavbarComponent from "../NavbarComponent";

const AboutPage = () => {
  return (
    <div>
      <NavbarComponent />

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
            <img src={Daniel} alt="Daniel" className="rounded-circle w-75" />
            <h3 className="fs-4 mb-0">Daniel Bontii</h3>
            <p className="fs-6 fw-bold text-secondary">Head of Engineering</p>
          </Col>
          <Col>
            <img
              src={Default}
              alt="Nana Kwame"
              className="rounded-circle w-75"
            />
            <h3 className="fs-4 mb-0">Nana Kwame Appau</h3>
            <p className="fs-6 fw-bold text-secondary">Founder and CEO</p>
          </Col>
          <Col>
            <img src={Paul} alt="Paul" className="rounded-circle w-75" />
            <h3 className="fs-4 mb-0">Paul Sansah</h3>
            <p className="fs-6 fw-bold text-secondary">COO</p>
          </Col>
          <Col>
            <img src={Fiifi} alt="" className="rounded-circle w-75" />
            <h3 className="fs-4 mb-0">Fiifi Appiah</h3>
            <p className="fs-6 fw-bold text-secondary">UX Designer</p>
          </Col>
          <Col>
            <img src={Default} alt="" className="rounded-circle w-75" />
            <h3 className="fs-4 mb-0">Felix Amoah</h3>
            <p className="fs-6 fw-bold text-secondary">
              Head of Sales and Marketing
            </p>
          </Col>
          <Col>
            <img src={Delight} alt="" className="rounded-circle w-75" />
            <h3 className="fs-4 mb-0">Delight Jessica</h3>
            <p className="fs-6 fw-bold text-secondary">
              Head of Tutoring and Test Prepping
            </p>
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
      <Footer />
    </div>
  );
};

export default AboutPage;
