import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = ({ hidden, setHidden }) => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Courses", link: "/courses" },
    { title: "Testimonial", link: "/testimonial" },
    { title: "Community", link: "/community" },
    // { title: "Enroll", link: "/enroll" },
  ];

  return (
    <div className="menu-container justify-content-between align-item-center blue-bg cus-nav fixed-top">
      <div className="pt-4 d-flex align-items-center justify-content-between ">
        <img alt="logo" src="/images/techtimeImage.png" height={40} />
        <div className="hamburger">
          <AiOutlineMenu
            color="white"
            size={25}
            onClick={() => setHidden((prevState) => !prevState)}
          />
        </div>
      </div>
      <div
        className={`align-items-center menu-items-container ${
          hidden && "menu-hidden"
        }`}
      >
        {links.map((item) => (
          <div key={item.title} className="text-nowrap menu-item">
            <NavLink
              end
              to={item.link}
              className="me-3 fs-6"
              onClick={() => setHidden(true)}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
        <div className="menu-item border-bottom-0">
          <div className="btn btn-lg btn-light py-2 ">
            <NavLink
              end
              to={"/enroll"}
              className={`me-3 fs-6 text-primary mx-3 text-nowrap `}
              onClick={() => setHidden(true)}
            >
              Enroll now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
