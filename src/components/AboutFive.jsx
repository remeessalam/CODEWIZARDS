import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { companyDetails } from "../constant";
const AboutFive = () => {
  return (
    <section className="bg-dark2">
      <div className="about-area-5 space-top space-bottom">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between">
            <div className="col-xl-5">
              <div className="about-thumb5">
                <div className="img1">
                  <img src="assets/img/normal/about_5-1.jpg" alt="img" />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={10} />
                            K+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p className="sec-desc">Client Review</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Welcome to {companyDetails.name}
                </h2>
                <p className="sec-text text-white mb-30">
                  At {companyDetails.name} , we specialize in driving innovation
                  and empowering businesses with advanced technology solutions.
                  From automating workflows to creating tailored software and
                  building intelligent applications, our mission is to help your
                  business thrive in a fast-changing digital world.
                </p>
                <p className="sec-text text-white">
                  Whether you’re looking for efficiency, scalability, or
                  enhanced user experiences, we’re here to deliver.
                </p>
              </div>
              <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Explore More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFive;
