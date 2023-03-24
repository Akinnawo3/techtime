import React from "react";
import Heroes from "./components/Heroes";
import "../../css/home.css";
import Tools from "./components/Tools";
import Section1 from "./components/Section1";

const Home = () => {
  return (
    <div className="">
      <Heroes />
      <Tools />
      <Section1 />
    </div>
  );
};

export default Home;
