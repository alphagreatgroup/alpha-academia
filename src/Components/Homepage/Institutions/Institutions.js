import React from "react";

import havard from "../../../images/institutions/havard.png";

function Institutions() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex jusify-content-around align-items-center">
        <img src={havard} className="img-fluid" alt="havard log" />
      </div>
      <div className="d-flex jusify-content-around align-items-center"></div>
    </div>
  );
}

export default Institutions;
