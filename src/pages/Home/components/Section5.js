import React from "react";
import "../../../css/section5.css";

const Section5 = () => {
  return (
    <div
      className="side-padding py-4 section-5 text-white"
      style={{ backgroundColor: "#004DB3" }}
    >
      <div className="w-text mx-auto px-5 mt-3">
        <small className="sm-left-text">JOIN OUR COMMUNITY </small>
      </div>
      <div
        className="fw-bold clash-d-f text-center bg-left-text position-relative bg-text mx-auto"
        style={{ fontSize: 43, lineHeight: "55px" }}
      >
        Are you ready to connect with the future talent of the tech world{" "}
      </div>
      <div className="w-text mx-auto px-5 ">
        <small className="sm-left-text">
          Meet Up With Other Techstars And Grow Together
        </small>
      </div>
      <div className="">
        <img alt="" width={"100%"} height={"100%"} src="/images/group.png" />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div
          className="cursor-pointer px-3 py-2 border bg-white ms-3 fw-bold rounded"
          style={{ color: "#004DB3" }}
        >
          Join Our Community
        </div>
      </div>
    </div>
  );
};

export default Section5;
