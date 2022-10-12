import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white text-start py-5 mt-5">
      <Container>
        <Row>
          <Col>
            <h4 className="fs-5">Our Sites</h4>
            <p className="fs-6">Alpha Great</p>
            <p className="fs-6">Alpha Pi</p>
          </Col>
          <Col>
            <h4 className="fs-5">Our Services</h4>
            <p className="fs-6">Test Prep</p>
            <p className="fs-6">Tutorials</p>
          </Col>
          <Col>
            <h4 className="fs-5">About</h4>
          </Col>
          <Col>
            <h4 className="fs-5">Contact</h4>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col className="d-flex align-items-center">Privacy Notice</Col>
        </Row>
        <hr className="bg-white" />
        <Row>
          <Col>
            <p>Alpha Great Spintex. Rd, Shell bus stop</p>
            <p>P. O. Box TN 1717</p>
            <p>Tel: +233 (0)559120555/ 247736843/246076373</p>
            <p>alphagreatgroup@gmail.com</p>
          </Col>
          <Col></Col>
          <Col>
            <h4>Stay Connected</h4>
            <Row>
              <Col>
                <FaFacebook className="fs-1" />
              </Col>
              <Col>
                <FaLinkedin className="fs-1" />
              </Col>
              <Col>
                <FaTwitter className="fs-1" />
              </Col>
              <Col>
                <FaInstagram className="fs-1" />
              </Col>
            </Row>
          </Col>
        </Row>
        <p className="text-center">&copy; 2022 alpha academia, Inc.</p>
      </Container>
    </div>
  );
};

export default Footer;
