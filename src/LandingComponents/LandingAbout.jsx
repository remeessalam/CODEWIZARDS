import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const LandingAbout = ({ page }) => {
  return (
    <section className="bg-dark2">
      <div className="about-area-5 space-top space-bottom">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between">
            <div className="col-xl-5">
              <div className="about-thumb5">
                <div className="img1">
                  <img
                    src={
                      page === "web"
                        ? "assets/img/landingpage/web/webabout.jpg"
                        : "assets/img/landingpage/app/appabout.jpg"
                    }
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style1 text-white">
                  {page === "web"
                    ? "Building Innovative Web Solutions for Your Business"
                    : "Developing Powerful Mobile Apps for a Connected Future"}
                </h2>
                {page === "web"
                  ? "At Cognitek, we specialize in creating custom web solutions that enhance your online presence and streamline business operations. Whether you need a modern, responsive website or a full-stack web application, our team of experts is dedicated to delivering seamless, user-friendly experiences that meet your unique needs."
                  : "At Cognitek, we are committed to developing mobile applications that empower businesses to engage with their audience in innovative ways. Our expert team builds intuitive, high-performance mobile apps that help you reach your customers wherever they are, with seamless functionality and an exceptional user experience."}
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

export default LandingAbout;
