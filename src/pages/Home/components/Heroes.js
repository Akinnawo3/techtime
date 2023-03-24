import React from "react";
import { Col, Row } from "reactstrap";

const Heroes = () => {
  return (
    <div className="heroes">
      <Row>
        <Col md={6}>
          <div className="heroes-left">
            <div className="text-white fw-bold" style={{fontSize:64, lineHeight:"82px"}}>Grow your skills to advance your career path</div>
          </div>
        </Col>
        <Col md={6}>
          <img
            alt="heroes img"
            src="images/heroes-right.png"
            height={"568"}
            width={"100%"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Heroes;
