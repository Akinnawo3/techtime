import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import "../../../css/section3.css";
import { categoriesList } from "../data/section3";

const Section4 = () => {
  const testimonies = [
    {
      name: "Bella Moon",
      role: "Product Designer",
      avater: "/images/avater1.png",
    },
    {
      name: "Samuel Fortune",
      role: "Product Designer",
      avater: "/images/avater2.png",
    },
    {
      name: "Bryce Jason",
      role: "Product Designer",
      avater: "/images/avater3.png",
    },
    {
      name: "Victor Lion",
      role: "Product Designer",
      avater: "/images/avater5.png",
    },
    {
      name: "Bryce Jason",
      role: "Product Designer",
      avater: "/images/avater1.png",
    },
  ];

  return (
    <div className="pt-2" style={{ backgroundColor: "#F8F9FC" }}>
      <div
        className="fw-bold clash-d-f text-center bg-left-text position-relative mt-5"
        style={{ fontSize: 43, lineHeight: "55px" }}
      >
        What Our Clients Are Saying
      </div>
      <div className="w-text mx-auto px-5 ">
        <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
          High-Defination Video Is Video Of Higher Resolution And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Sny Standard Video Image
        </small>
      </div>
      {/* <div className="d-flex my-4 justify-content-center">
        {categories.map((item) => (
          <div
            key={item}
            className={`mx-2 mx-md-3 fw-bold ${
              category === item && "bg-white rounded"
            }  py-2 px-2 px-md-3 text-nowrap`}
            style={{ color: category === item ? "#004DB3" : "#A1A1A1" }}
            onClick={() => setCategory(item)}
          >
            <small> {item}</small>
          </div>
        ))}
      </div> */}

      {/* )} */}
    </div>
  );
};

export default Section4;
