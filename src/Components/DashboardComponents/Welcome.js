import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="welcome-head text-white pt-5">
        <h2 className="pt-5 fs-5">welcome to the class</h2>
        <p className="fs-1 fw-bold">Daniel Bontii</p>
      </div>
      <div className="welcome-body pt-5">
        <button className="fw-bold crimson text-white px-5 py-1 mt-5" onClick={handleNavigate}>continue registration</button>
      </div>
    </div>
  );
};

export default Welcome;
