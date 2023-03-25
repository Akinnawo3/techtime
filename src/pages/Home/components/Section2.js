import React from "react";
import { Col, Row } from "reactstrap";

const Section2 = () => {

  return (
    <div
      className="side-padding pt-4"
      style={{ backgroundColor: "#F8F9FC" }}
    >
      <Row>
        <Col md={6}>
          <div
            className="fw-bold clash-d-f text-center text-md-start bg-left-text position-relative"
            style={{ fontSize: 43, lineHeight: "55px" }}
          >
            This Is Why We Are Best From Others{" "}
          </div>
          <div className="pe-md-5 me-md-4 mt-2  text-center text-md-start">
            <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </small>
          </div>
          <div className="mt-4 text-center text-md-start">
            <img
              className="sec-1-rg-img"
              alt=""
              height="100%"
              width="100%"
              src={`/images/sec-2-bn.png`}
            />
          </div>
        </Col>
        <Col md={5}></Col>
      </Row>
    </div>
  );
};

export default Section2;
