import React, { useState } from "react";
import "../../../css/section6.css";
import {HiOutlinePlusSm} from "react-icons/hi"
import {BsDash} from "react-icons/bs"

const Section6 = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const questions = [
    "Is there a free trial available?",
    "Can i change my plan later?",
    "Are the courses lifetime?",
    "Do I get certified after taking courses?",
    "How do I reach out to mentors?",
    "Do we get job ready after taking courses?",
  ];

  const setExpIndex = (index) => {
    let res = index === currIndex ? null : index;
    setCurrIndex(res);
  };
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
      <div className="mt-4 w-75 mx-auto ">
        {questions.map((item, index) => (
          <div key={item} className="py-4 border-bottom faq-border">
            <div className="d-flex justify-content-between align-items-center question-txt">
              <div className="fw-bold">{item}</div>
              <div
                className="cursor-pointer"
                onClick={() => setExpIndex(index)}
                style={{ color: "#000F24" }}
              >
                {currIndex === index ? <BsDash /> : <HiOutlinePlusSm /> }
              </div>
            </div>

            <div className="mt-2">
              <div
                className={`grey-text acc-text ${
                  currIndex !== index && "d-none"
                }`}
              >
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
