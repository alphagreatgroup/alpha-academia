import React from "react";
import { Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h1>Student Registration</h1>
      <Row className="my-3 row-cols-1 row-cols-md-5 gap-2 text-start mx-2 mx-md-5">
        <Col className="crimson">
          <span className="rounded-circle bg-crimson p-2 text-white me-2">1</span>
          Personal Details
        </Col>
        <Col className="text-muted">
          <span className="rounded-circle bg-secondary p-2 text-dark me-2">2</span>
          Education
        </Col>
        <Col className="text-muted">
          <span className="rounded-circle bg-secondary p-2 text-dark me-2">3</span>
          Other Questions
        </Col>
        <Col className="text-muted">
          <span className="rounded-circle bg-secondary p-2 text-dark me-2">4</span>
          Review
        </Col>
      </Row>
      <form className="mx-2 mx-md-5 text-start mt-3" >
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Daniel" className="w-100"
              />
            </div>
          </Col>
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="gender">Gender</label>
              <input type="text" name="gender" id="gender" placeholder="Male" className="w-100" />
            </div>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Bontii" className="w-100"
              />
            </div>
          </Col>
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="dob">Gender</label>
              <input type="date" name="dob" id="dob" placeholder="MM/DD/YYY" className="w-100" />
            </div>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="otherNames">Other Names (if any)</label>
              <input
                type="text"
                name="otherNames"
                id="otherNames"
                placeholder="Kwame" className="w-100"
              />
            </div>
          </Col>
          <Col>
            <div className="form-group mb-3">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" placeholder="Ghana" className="w-100" />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Dashboard;
