import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import IMAGE1 from "../../assets/images/portfolios/1/1.png";
import IMAGE2 from "../../assets/images/portfolios/1/2.png";
import IMAGE3 from "../../assets/images/portfolios/1/3.png";

import IMAGE4 from "../../assets/images/portfolios/2/1.png";
import IMAGE5 from "../../assets/images/portfolios/2/2.png";
import IMAGE6 from "../../assets/images/portfolios/2/3.png";

import IMAGE7 from "../../assets/images/portfolios/3/1.png";
import IMAGE8 from "../../assets/images/portfolios/3/2.png";
import IMAGE9 from "../../assets/images/portfolios/3/3.png";

import IMAGE10 from "../../assets/images/portfolios/4/1.png";
import IMAGE11 from "../../assets/images/portfolios/4/2.png";
import IMAGE12 from "../../assets/images/portfolios/4/3.png";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "44%",
              margin: "2%",
            }}
          >
            <img src={IMAGE1} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE2} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE3} style={{ margin: "2%" }} alt="" />
            <a
              href="https://plab-ng.envytheme.com/dashboard-eCommerce"
              style={{ fontSize: "20px", margin: "2%", underline: "" }}
            >
              https://plab-ng.envytheme.com/dashboard-eCommerce
            </a>
            <p style={{ margin: "2%" }}>
              I am a senior mern stack developer. Here, <br />I design button,
              table, card and progress bar UI components in 15 days. This
              template is popular so I am proud of this project.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "44%",
              margin: "2%",
            }}
          >
            <img src={IMAGE4} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE5} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE6} style={{ margin: "2%" }} alt="" />
            <a
              href="https://www.srsprotection.com"
              style={{ fontSize: "20px", margin: "2%", underline: "" }}
            >
              https://www.srsprotection.com/
            </a>
            <p style={{ margin: "2%" }}>
              My another project in WordPress. Basically I had created reporting
              application on this Website.
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "44%",
              margin: "2%",
            }}
          >
            <img src={IMAGE7} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE8} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE9} style={{ margin: "2%" }} alt="" />
            <a
              href="https://www.delta.com/"
              style={{ fontSize: "20px", margin: "2%", underline: "" }}
            >
              https://www.delta.com/
            </a>
            <p style={{ margin: "2%" }}>
              this website is popular travelling service website . This website
              was built with PHP, Angular and Java EE. I design dashboard front
              and developed Angular API in this project with senior front end
              developers
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "44%",
              margin: "2%",
            }}
          >
            <img src={IMAGE10} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE11} style={{ margin: "2%" }} alt="" />
            <img src={IMAGE12} style={{ margin: "2%" }} alt="" />
            <a
              href="https://www.AlphaCoders.com"
              style={{ fontSize: "20px", margin: "2%", underline: "" }}
            >
              https://www.AlphaCoders.com
            </a>
            <p style={{ margin: "2%" }}>
              is a platform that connects content writers with their fans to
              collaborate for great revenue earning opportunities. Through this
              platform, you can search images, avatars, art and much more as
              content. A platform built using the Laravel framework,
              AlphaCoders.com is expanding worldwide, and credit goes to its
              uniqueness. In this project, I develop card designs by Laravel
              framework.
            </p>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
