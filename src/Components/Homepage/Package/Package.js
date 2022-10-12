import React from "react";

import "./PackageStyles.css";

function Package(props) {
  return (
    <div>
      <div className="top-right"></div>
      <div className="top-box"></div>
      <div className="top-down"></div>
      <div className="box d-flex justify-content-center align-items-center">
        <img src={props.imagePath} alt={props.alt} />
      </div>
      <h3 className="text-start w-50 package-heading">{props.heading}</h3>
      <p className="text-start w-50 package-intro">{props.intro}</p>
    </div>
  );
}

export default Package;
