import React from "react";

import "./TutorStyles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import fullStar from "../../../images/full star.png";
import halfStar from "../../../images/half star.png";
import emptyStar from "../../../images/empty star.png";

function Tutor(props) {
  return (
    <div className="tutor-card">
      <img
        src={props.imagePath}
        className="img-fluid"
        alt={`image of ${props.name}`}
      />
      <Row className="mt-3">
        <Col>
          <Row>
            <p className="text-start h5">{props.name}</p>
          </Row>
          <Row>
            <p className="text-start">{props.courses}</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <p className="text-end">
              <span className="stars">
                {new Array(Number(props.rating.split(".")[0]))
                  .fill(0)
                  .map((star) => (
                    <img className="star" src={fullStar} />
                  ))}
                <img
                  className="star"
                  src={
                    Number(props.rating.split(".")[0]) < 5 &&
                    props.rating.split(".")[1] == "0"
                      ? emptyStar
                      : halfStar
                  }
                />
                {new Array(5 - Number(props.rating.split(".")[0]) - 1)
                  .fill(0)
                  .map((star) => (
                    <img className="star" src={emptyStar} />
                  ))}
              </span>
              <span className="rating">{props.rating}</span>
            </p>
          </Row>
          <Row>
            <p className="text-end">
              Lives in <span className="home">{props.home}</span>
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Tutor;
