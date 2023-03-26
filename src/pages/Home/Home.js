import React from "react";
import Heroes from "./components/Heroes";
import "../../css/home.css";
import Tools from "./components/Tools";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

const Home = () => {
  return (
    <div className="">
      <Heroes />
      <Tools />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;
