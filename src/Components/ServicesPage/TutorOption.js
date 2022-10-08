import React from "react";

const TutorOption = ({ bg, text, color }) => {
  return (
    <div className="tutor-option">
      <img src={bg} alt="Tutor Option" className="w-100"/>
      <div className="overlay text-white fw-bold" style={{ backgroundColor: color }}>
        {text}
        <button className="btn btn-light my-auto ">book</button>
      </div>
    </div>
  );
};

export default TutorOption;
