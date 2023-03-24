import React from "react";
import Heroes from "./components/Heroes";
import "../../css/home.css";


const Home = () => {
  return (
    <div className="side-padding blue-bg body-wrapper home-wrapper">
      <Heroes />
    </div>
  );
};

export default Home;
