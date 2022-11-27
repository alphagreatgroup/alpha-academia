import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../images/Logo.png";
import GoogleIcon from "../../images/flat-color-icons_google.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <div>
      <Row>
        <Col className="d-none d-md-block">
          <div className="bg-wood w-100 h-100 px-5">
            <img
              src={Logo}
              alt="Alpha Academia Logo"
              className="vertical-center bg-white p-2"
            />
          </div>
        </Col>
        <Col>
          <h1 className="font-fill text-start px-2 px-md-5">
            Create an <span className="crimson">account</span>
          </h1>
          <p className="text-start px-2 px-md-5 fs-5">
            Please enter details to register
          </p>

          <form className="px-2 px-md-5 text-start">
            <div className="inline mb-3">
              <div className="form-group">
                <input type="radio" name="teacher" id="teacher" />
                <label htmlFor="teacher" className="ps-2">
                  Teacher
                </label>
              </div>
              <div className="form-group">
                <input type="radio" name="student" id="student" />
                <label htmlFor="student" className="ps-2">
                  Student
                </label>
              </div>
            </div>

            <Row className="row-cols-1 row-cols-md-2">
              <Col>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Daniel"
                    className="w-100"
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Bontii"
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="w-100"
              />
            </div>
            <div className="form-group mb-3 w-100">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-100"
                placeholder="*************"
              />
            </div>

            <div className="form-group w-100">
              <input type="checkbox" name="t&c" id="t&c" />
              <label htmlFor="t&c" className="ps-2">
                I agree with the terms and conditions
              </label>
            </div>

            <button type="submit" className="w-100 fw-bold py-2 fs-3">
              create account
            </button>
            <div className="google">
              <p className="mb-0 mt-4 text-center">or continue with</p>
              <button className="w-100 fw-bold bg-black fs-3">
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="google-icon"
                />
                Google
              </button>
            </div>
          </form>

          <p className="mt-5">
            already have an account?
            <span
              role="button"
              className="crimson fs-4 fw-bold ps-1"
              onClick={handleNavigate}
            >
              sign in
            </span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
