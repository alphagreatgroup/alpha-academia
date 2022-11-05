import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import customerCare from "../../images/customer-care.png";

import "./ContactPageStyles.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <Container className="mt-5 ">
        <Row>
          <Col md={6}>
            <h1 className="text-start">
              We are <span className="crimson">ready</span> to{" "}
              <span className="crimson">answer all</span> your{" "}
              <span className="crimson">questions</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <Col md={6} className="text-start">
                <label htmlFor="fullName" className="d-block">
                  Full name
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="eg. Titus Appiah"
                  id="fullName"
                />
              </Col>
              <Col className="text-start">
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                  id="email"
                />
              </Col>
            </Row>
            <Row className="text-start message">
              <Col>
                <label htmlFor="message" className="d-block">
                  Message
                </label>
                <textarea
                  className="w-100 form-control"
                  rows={5}
                  placeholder="Please leave your message here"
                ></textarea>
              </Col>
            </Row>
            <Row className="text-start">
              <Col>
                <button>Send message</button>
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-md-block">
            <div
              className="contour-bg text-end h-75 position-absolute"
              style={{ width: "35%" }}
            ></div>
            <img
              src={customerCare}
              className="img-fluid grayscale-img w-75"
              alt="custome care"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactPage;
