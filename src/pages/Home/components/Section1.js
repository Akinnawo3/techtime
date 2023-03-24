import React from "react";
import { Col, Row } from "reactstrap";
import "../../../css/section1.css";

const Section1 = () => {
  return (
    <div className="side-padding py-4" style={{ backgroundColor: "#F8F9FC" }}>
      <div className="px-3 py-4">
        <Row>
          <Col md={6}>
            <div
              className="fw-bold clash-d-f text-center text-md-start bg-left-text"
              style={{ fontSize: 43, lineHeight: "55px" }}
            >
              High quality video, audio & live classes{" "}
            </div>
            <div className="pe-md-5 me-md-4 mt-2  text-center text-md-start">
              <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </small>
            </div>
            <div className="d-flex mt-3">
              <div
                className="cursor-pointer px-3 py-2 border ms-3 fw-bold rounded"
                style={{ color: "#004DB3" }}
              >
                View Courses
              </div>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Section1;
