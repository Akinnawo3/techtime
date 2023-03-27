import React from "react";
import { toolslList, toolslListSm, tooslList } from "../../../svg/toolsSvg";

const Tools = () => {
  // TODO: Remove overflow: hidden on line 9
  return (
    <div
      className="side-padding"
      style={{ backgroundColor: "#CCDBF0", overflow: "hidden" }}
    >
      <div className="d-flex align-items-center justify-content-center mx-auto py-4 d-none d-md-flex">
        {toolslList.map((item, key) => (
          <div className="mx-4">{item}</div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center mx-auto py-4 d-md-none">
        {toolslListSm.map((item, key) => (
          <div className="mx-2">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
