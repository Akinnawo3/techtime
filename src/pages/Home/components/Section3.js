import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import "../../../css/section3.css";
import { categoriesList } from "../data/section3";

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
      {/* TODO: Remove maybe? */}
      <div className="d-flex my-4  flex-column flex-sm-row justify-content-center">
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

      {/* {categories == "All Categories" && ( */}
      <div>
        <Row>
          {categoriesList.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.title} className="mt-3">
              <div className="bg-white rounded p-2">
                <img alt="banner" src={item.image} width={"100%"} />
                <div className="d-flex justify-content-between mt-2">
                  <div
                    className="px-2 px-md-3 py-1 fw-bold dy-text"
                    style={{
                      backgroundColor: "#1E5DCE33",
                      borderRadius: 16,
                      color: "#1E5DCE",
                    }}
                  >
                    <small>{item.category}</small>
                  </div>
                  <div className="text-nowrap">
                    <small className="dy-text d-flex align-items-center">
                      <span>
                        4.7k
                        <img
                          className="mb-1 str"
                          width={17}
                          height={17}
                          alt=""
                          src="/images/star.png"
                        />
                      </span>
                      <span className="ms-2">(32.7k+)</span>
                    </small>
                  </div>
                </div>
                <div className="mt-2 fw-bold tit-text">{item.title}</div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center text-nowrap">
                    <span>
                      <img
                        className="mb-1 me-1"
                        width={15}
                        height={15}
                        alt=""
                        src="/images/timer.png"
                      />
                    </span>
                    <small className="grey-text dur-txt">{item.duration}</small>
                  </div>
                  <div className="d-flex align-items-center text-nowrap">
                    <span>
                      <img
                        className="mb-1 me-1"
                        width={15}
                        height={15}
                        alt=""
                        src="/images/book.png"
                      />
                    </span>
                    <small className="grey-text dur-txt">
                      {item.lessons} Lessons
                    </small>
                  </div>
                </div>
                <div className="my-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center text-nowrap">
                    <span>
                      <img
                        className="mb-1 me-1"
                        width={30}
                        height={30}
                        alt=""
                        src="/images/avater1.png"
                      />
                    </span>
                    <small className="fw-bold dur-txt">{item.name}</small>
                  </div>
                  <div className="d-flex align-items-center text-nowrap">
                    {/* <span>
                      <img
                        className="mb-1 me-1"
                        width={15}
                        height={15}
                        alt=""
                        src="/images/book.png"
                      />
                    </span> */}
                    <small
                      className="grey-text dur-txt fw-bold"
                      style={{ color: "#004DB3" }}
                    >
                      {item.price}
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className=" mt-3 d-flex justify-content-center">
          <div
            className=" text-white cursor-pointer px-3 py-2 border fw-bold"
            style={{ backgroundColor: "#004DB3" }}
          >
            Explore All courses
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Section3;
