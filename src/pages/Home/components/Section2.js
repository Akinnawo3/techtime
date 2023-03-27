import React from "react";
import { Col, Row } from "reactstrap";
import { itemsListSec2 } from "../data/section2";

const Section2 = () => {
  return (
    <div
      className="side-padding pt-4 p-0"
      style={{ backgroundColor: "#F8F9FC" }}
    >
      <Row className="flex-sm-column flex-md-row">
        <Col md={12} lg={6}>
          <div
            className="fw-bold clash-d-f text-center text-md-start bg-left-text position-relative"
            style={{ fontSize: 43, lineHeight: "55px" }}
          >
            This Is Why We Are Best From Others{" "}
          </div>
          <div className="pe-md-5 me-md-4 mt-2  text-center text-md-start">
            <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
              High-Defination Video Is Video Of Higher Resolution And Quality
              Than Standard Definition. While There’s No Standard Meaning For
              High Definition, Generally Sny Standard Video Image
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
        <Col md={12} lg={6}>
          <div className="ms-md-5">
            <Row>
              {itemsListSec2.map((item, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  className="my-3 mt-md-0 p-0 bg-primary"
                >
                  <div className="bg-white p-3">
                    <img alt="icon" height={48} width={48} src={item.icon} />
                    <div className="mt-3 fw-bold text-nowrap d-none d-md-block">
                      {item.title}
                    </div>
                    <small className="mt-3 fw-bold text-nowrap d-md-none">
                      {item.title}
                    </small>
                    <div className="mt-2">
                      <small style={{ color: "#A1A1A1" }}>{item.body}</small>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
