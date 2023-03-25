import React, { useState } from "react";
import "../../../css/section3.css";

const Section3 = () => {
  const [category, setCategory] = useState("All Categories");
  const categories = ["All Categories", "Design", "Development", "Marketing"];







  return (
    <div className="side-padding pt-4" style={{ backgroundColor: "#F8F9FC" }}>
      <div
        className="fw-bold clash-d-f text-center bg-left-text position-relative mt-5"
        style={{ fontSize: 43, lineHeight: "55px" }}
      >
        Browse Our Popular Courses
      </div>
      <div className="w-text mx-auto px-5 ">
        <small className="sm-left-text" style={{ color: "#A1A1A1" }}>
          High-Defination Video Is Video Of Higher Resolution And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Sny Standard Video Image
        </small>
      </div>
      <div className="d-flex my-4 justify-content-center">
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
      </div>

      {categories === "All Categories" && <div>

        </div>}
    </div>
  );
};

export default Section3;
