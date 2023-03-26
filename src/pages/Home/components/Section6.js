import React from "react";

const Section6 = () => {
  const questions = [
    "Is there a free trial available?",
    "Can i change my plan later?",
    "Are the courses lifetime?",
    "Do I get certified after taking courses?",
    "How do I reach out to mentors?",
    "Do we get job ready after taking courses?"


  ];
  return (
    <div
      className="side-padding py-4 section-5"
      //   style={{ backgroundColor: "#004DB3" }}
    >
      <div
        className="fw-bold clash-d-f text-center bg-left-text position-relative mt-5"
        style={{ fontSize: 43, lineHeight: "55px" }}
      >
        Frequently Asked Questions
      </div>
      <div className="w-text mx-auto px-5 ">
        <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
          High-Defination Video Is Video Of Higher Resolution And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Sny Standard Video Image
        </small>
      </div>
    </div>
  );
};

export default Section6;
