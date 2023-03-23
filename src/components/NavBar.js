import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "../css/navbar.css";
import {RiMenu4Fill} from "react-icons/ri";
export let navbarStuff;

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const links = [
    {title: "Home", link: "/"},
    {title: "About Us", link: "/about"},
    {title: "Contact", link: "/contact"},
  ];

  navbarStuff = {
    hidden,
    setHidden,
  };


  // Random component

  // Renderer callback with condition

  return (
    <div className="secondary-bg cus-nav text-center fixed-top">
      <div className="container-fluid cus-medium justify-content-between w-100">
        <div className="logo-hang d-flex justify-content-between align-items-center">
          <div className=" d-flex  text-nowrap cursor-pointer">
            <div>
              <img alt="logo" src="images/logo.png" height={40} />
            </div>
            <Link to="/" className="ms-1">
              <div className="" style={{marginTop: "0.8rem"}}>
                <span className="lh-1" style={{fontWeight: 500, fontSize: "1.7rem"}}>
                  {/* <span className="lh-1" style={{fontWeight: 500, fontSize: 39}}> */}
                  Stereo
                </span>{" "}
                <span className="ms-1 lh-1" style={{fontWeight: 900, fontSize: "1.7rem"}}>
                  Pay
                </span>
                <br />
                <div className="text-start fw-bold" style={{fontSize: 14}}>
                  Sound is commodity
                </div>
              </div>
            </Link>
            <sup className="lh-1 mt-3" style={{fontWeight: 700, fontSize: 12}}>
              TM
            </sup>
          </div>
          <div className="cursor-pointer cus-md-hide">
            <RiMenu4Fill size={30} onClick={() => setHidden(!hidden)} />
          </div>
        </div>
        <div className={`logo-but cus-medium justify-content-center align-items-center ${hidden && "drawer-hidden"}`}>
          {links.map((item) => (
            <div className="text-nowrap">
              <NavLink end to={item.link} className="me-3" onClick={() => setHidden(true)}>
                {item.title}
              </NavLink>
              <hr className="cus-md-hide" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
