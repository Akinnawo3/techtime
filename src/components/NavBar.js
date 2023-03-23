import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { RiMenu4Fill } from "react-icons/ri";
export let navbarStuff;

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Courses", link: "/courses" },
    { title: "Testimonial", link: "/testimonial" },
    { title: "Community", link: "/community" },
    // { title: "Enroll", link: "/enroll" },
  ];

  navbarStuff = {
    hidden,
    setHidden,
  };

  return (
    <div className="blue-bg cus-nav">
      <div className="pt-4 side-padding d-flex align-items-center justify-content-between ">
        <img alt="logo" src="/images/techtimeImage.png" height={40} />
        <div className="d-flex align-items-center">
          {links.map((item) => (
            <div key={item.title} className="text-nowrap ">
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
          <div className="btn btn-lg btn-light py-2">
            <NavLink
              end
              to={"/enroll"}
              className="me-3 fs-6 text-primary mx-3"
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
