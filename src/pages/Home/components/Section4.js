import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import "../../../css/section3.css";
import { categoriesList } from "../data/section3";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

  console.log(window.innerWidth)

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
      <div className="mt-5">
        <Carousel
          centerMode
          centerSlidePercentage={window.innerWidth > 768 ? 38 : 75}
          showThumbs={false}
          showStatus={false}
        >
          {/* <Carousel centerMode centerSlidePercentage={75} showThumbs={false} showStatus={false}> */}
          {testimonies.map((item, index) => (
            <div
              key={index}
              className="bg-white px-3 py-3 text-start rounded mx-2"
              style={{ width: "97%" }}
            >
              <small className="grey-text">
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </small>
              <div className="mt-3 d-flex align-items-center">
                <span>
                  <img
                    className="mb-1 me-1"
                    width={48}
                    height={48}
                    alt=""
                    src={item.avater}
                  />
                </span>
                <div className="ms-2">
                  <small className="fw-bold dur-txt text-nowrap">
                    {item.name}
                  </small>
                  <div>
                    {" "}
                    <small className="grey-text text-nowrap">{item.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
      <div>dfjgkn</div>
    </div>
  );
};

export default Section4;
