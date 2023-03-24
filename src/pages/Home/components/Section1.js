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
            <div className="d-flex mt-3 justify-content-center justify-content-md-start">
              <div
                className=" text-white cursor-pointer px-3 py-2 border fw-bold"
                style={{ backgroundColor: "#004DB3" }}
              >
                View Courses
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-center justify-content-md-start">
              <div className=" ">
                <div className="d-flex text-nowrap">
                  <div className="cursor-pointer px-3 px-md-4 py-3 border bg-white fw-bold rounded text-nowrap">
                    <img
                      className="img-ic"
                      alt="avater"
                      src={`/images/ic-1.png`}
                      height="32px"
                      width="32px"
                    />
                    <span className="ms-2 text-nowrap"> Audio Classes</span>
                  </div>
                  <div className="cursor-pointer px-2 px-md-4 py-3 border bg-white fw-bold rounded ms-3 text-nowrap">
                    <img
                      className=" img-ic"
                      alt="avater"
                      src={`/images/ic-2.png`}
                      height="32px"
                      width="32px"
                    />
                    <span className="ms-2 text-nowrap">Live Classes</span>
                  </div>
                </div>
                <div className="d-flex mt-3 ">
                  <div className="cursor-pointer px-1 px-md-4 py-3 border bg-white fw-bold rounded text-nowrap">
                    <img
                      className=" img-ic"
                      alt="avater"
                      src={`/images/ic-3.png`}
                      height="32px"
                      width="32px"
                    />
                    <span className="ms-2 text-nowrap"> Recorded Classes</span>
                  </div>
                  <div className="cursor-pointer px-3 px-md-4 py-3 border bg-white fw-bold rounded ms-3 text-nowrap">
                    <img
                      className=" img-ic"
                      alt="avater"
                      src={`/images/ic-4.png`}
                      height="32px"
                      width="32px"
                    />
                    <span className="ms-2 text-nowrap"> 50+ notes</span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </Col>
          <Col className="mt-4 mt-md-0" md={6}>
            <div className="sect1-right text-center text-md-start position-relative">
              <img
                className="sec-1-rg-img"
                alt=""
                height="100%"
                width="100%"
                src={`/images/sec1-right-img.png`}
                style={{ marginLeft: "-15%" }}
              />
              <div className="position-absolute text-center" style={{top:80, left:-80}}>
                <div className="bg-white px-2 py-1 rounded d-flex flex-column justify-content-center">
                <div className="fw-bold">255k+ enrolled students</div>
                  <div className="" style={{marginLeft:10}}>
                    {Array.from({ length: 5 }).map((item, index) => (
                      <img
                        alt="avater"
                        src={`/images/avater${index + 1}.png`}
                        height="40px"
                        width="40px"
                        ite
                        style={{ marginLeft: -10 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section1;
