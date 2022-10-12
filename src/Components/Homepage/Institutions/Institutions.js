import React from "react";

import havard from "../../../images/institutions/harvard.png";
import ug from "../../../images/institutions/ug.png";
import knust from "../../../images/institutions/knust.png";
import umat from "../../../images/institutions/umat.png";
import uow from "../../../images/institutions/uow.png";

function Institutions() {
  return (
    <div className="d-flex flex-column mt-5">
      <h2 className="h1">
        <span className="crimson">Institutions</span> that{" "}
        <span className="crimson">took</span> our students in
      </h2>
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        <img src={havard} className="img-fluid grayscale-img" alt="havard logo" />
        <img src={ug} className="img-fluid grayscale-img" alt="university of Ghana logo" />
        <img src={knust} className="img-fluid grayscale-img" alt="knust logo" />
      </div>
      <div className="d-flex justify-content-around align-items-center mt-4 flex-wrap">
        <img src={umat} className="img-fluid grayscale-img" alt="umat logo" />
        <img
          src={uow}
          className="img-fluid grayscale-img"
          alt="university of Wayoming logo"
        />
      </div>
    </div>
  );
}

export default Institutions;
