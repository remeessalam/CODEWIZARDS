import React from "react";
import { companyDetails } from "../constant";

const HeroFive = () => {
  return (
    <section className="bg-dark2">
      <div
        className="hero-wrapper hero-5"
        id="hero"
        style={{
          backgroundImage: "url(assets/img/hero/hero_bg_5_1.jpg)",
          objectFit: "cover !important",
        }}
      >
        {/* <div
          style={{
            background: "black",
            position: "absolute",
            width: "100%",
            minHeight: "100%",
            opacity: ".5",
          }}
        ></div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-style5 text-center">
                <h1 className="hero-title text-white">
                  Welcome to{" "}
                  <span className="text-theme2">CODEWIZARDS INFOTECH</span> –
                  Innovating Your Digital Future
                </h1>
                <p className="hero-text text-white">
                  At {companyDetails.name}, we are passionate about creating
                  innovative technology solutions that help businesses thrive in
                  an ever-evolving digital landscape. From custom software to
                  advanced AI systems, we deliver tailored services to turn your
                  ideas into reality.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-thumb5-1">
                <img src="assets/img/hero/homepagebanner.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFive;
