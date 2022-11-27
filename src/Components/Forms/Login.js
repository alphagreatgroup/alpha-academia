import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/Logo.png";
import GoogleIcon from "../../images/flat-color-icons_google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <Container>
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
          <h1 className="font-fill text-start px-2 px-md-5">welcome back</h1>
          <p className="text-start px-2 px-md-5 fs-5">
            Please enter details to login
          </p>

          <form className="px-2 px-md-5 text-start">
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

            <p className="crimson text-decoration-underline">forgot password</p>

            <button type="submit" className="w-100 fw-bold py-2 fs-3">
              login
            </button>
            <div className="google">
              <p className="mb-0 mt-4 text-center">or sign in with</p>
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
            new member?
            <span
              className="crimson fs-4 fw-bold ps-1"
              onClick={handleNavigate}
            >
              create account
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
