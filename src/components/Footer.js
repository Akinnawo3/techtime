import React from "react";
import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Button, Col, Input, Row } from "reactstrap";
import "../css/footer.css";

const Footer = () => {
  const socials = [BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsDiscord];
  const categories = [
    {
      title: "Useful Links",
      items: [
        "Home",
        "About Us",
        "Our Courses",
        "Testimonials",
        "Our Community",
      ],
    },
    {
      title: "Community",
      items: ["Help Centers", "Partners", "Suggestion", "Blog", "Newsletter"],
    },
    {
      title: "Subscribe Us",
    },
  ];
  return (
    <div className="footer text-white">
      <Row>
        <Col md={6} lg={3}  className="mb-4">
          <img alt="logo" src="/images/techtimeImage.png" height={40} />
          <div className="mt-3 clash-d-f">
            Reach out to us on any of our social media networks
          </div>
          <div className="d-flex mt-2">
            {socials.map((item) => {
              let Icon = item;
              return (
                <div className="me-4">
                  <Icon color="#2A2A2B" size={31} />
                </div>
              );
            })}
          </div>
        </Col>
        {categories.map((item) => (
          <Col md={6} lg={3} key={item.title} className="my-2">
            <div
              className="clash-d-f mb-2"
              style={{ fontWeight: 600, fontSize: "2rem" }}
            >
              {item.title}
            </div>
            {item.title === "Subscribe Us" && (
              <div className="mt-3 d-flex mb-5 flex-wrap flex-md-nowrap">
                <Input className="bg-dark p-3 border-primary " style={{width:"150px", borderRadius:0}} placeholder="nft123@gmail.com" />
                <Button color="primary" style={{borderRadius:0}}  className="text-nowrap btn btn-primary" >Send Message</Button>
              </div>
            )}

            {item?.items?.map((subItem) => (
              <div className="my-2" key={subItem}>
                <div> {subItem}</div>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;