import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgH from "../../assets/image/racing/cars-with-fake-engine-sounds-is-the-vroom-a-sham.png";
import imgHPattern from "../../assets/image/l6/png/l6-hero-pattern.png";
import imgHW from "../../assets/image/svg/l6-hero-wave.svg";
import imgHWD from "../../assets/image/svg/l6-hero-wave-dark.svg";
import imgS1 from "../../assets/image/l6/png/l6-hero-shape1.png";
import imgS2 from "../../assets/image/l6/png/l6-hero-shape2.png";
import imgS3 from "../../assets/image/l6/png/l6-hero-shape3.png";
import imgAS from "../../assets/image/l6/png/l6-download-appstore.png";
import imgGP from "../../assets/image/l6/png/l6-download-gplay.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="hero-area-03 pt-29 pt-lg-32 pb-5 position-relative z-index-1"
        css={`
          background-image: linear-gradient(
            225deg,
            #7b11f9 0%,
            #7922d8 39%,
            #3636b2 100%
          );
        `}
      >
        <div
          className="shape-1 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <img src={imgS1} alt="" />
        </div>
        <div
          className="shape-2 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <img src={imgS2} alt="" />
        </div>
        <div
          className="shape-3 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src={imgS3} alt="" />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="hero-content dark-mode-texts mb-15 mb-lg-30 text-center text-md-start ">
                <h1 className="gr-text-2 mb-8 text-white pe-xl-4">
                  #B4mad Racing
                </h1>
                <p className="gr-text-8 px-7 ps-md-0 pe-md-11 mb-0 gr-color-white-opacity-7">
                   Your trusted Track Record to accelerate your racing career
                </p>
                {/* <div className="hero-btns mt-11">
                  <Link to="/#" className="btn btn-red rounded-8 text-white gr-hover-y">
                    Auf die Plaetze...
                  </Link>
                </div> */}
              </div>
            </Col>
            <div
              className="col-md-9 col-lg-5 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="hero-img position-relative">
                <img
                  src={imgH}
                  alt=""
                  className="w-100 position-relative gr-z-index-1"
                />
                <div
                  className="abs-img"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                  css={`
                    z-index: initial;
                  `}
                >
                  <img src={imgHPattern} alt="" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <div className="wave-shape">
          <img src={imgHW} alt="" className="w-100 light-shape default-shape" />
          <img src={imgHWD} alt="" className="w-100 dark-shape" />
        </div>
      </div>
    </>
  );
};

export default Hero;
