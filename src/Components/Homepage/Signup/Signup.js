import React from "react";
import "./SignupStyles.css";
import Container from "react-bootstrap/Container";

function SignUp() {
  return (
    <Container fluid className="p-5 mt-5 d-flex flex-column sign-up">
      <p className="text-white my-5">
        You can signup{" "}
        <span className="h2 d-block">to also experience the best </span>
      </p>
      <div className="d-flex my-5 justify-content-around">
        <button>Register as parent</button>
        <button>Register as student</button>
        <button>Register as tutor</button>
      </div>
    </Container>
  );
}

export default SignUp;
