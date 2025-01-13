import React from "react";
import { companyDetails, ourprocess, whychooseus } from "../constant";

const ProcessTwo = () => {
  return (
    <section className="bg-dark2">
      <div className="process-area-2 space-bottom space-top">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Our Process
                </span>
                <h2 className="sec-title style2 text-white">
                  Turning Ideas into Reality
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="mb-60 sec-text text-white mt-0">
                Our process is designed to deliver exceptional results through a
                seamless journey. From discovery and design to development,
                testing, and launch, we ensure every step is executed with
                precision, transparency, and a focus on your success.
              </p>
            </div>
          </div>

          <div className="row gy-30">
            {ourprocess.map((obj) => (
              <div className="col-lg-6 col-xl-3 process-card-wrap2">
                <div className="process-card style2">
                  <h3 className="process-card_number">0{obj.id}</h3>
                  <div className="process-card_content">
                    <span className="process-card-text">{obj.title}</span>
                    <h4 className="process-card-title">{obj.desc}</h4>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">02</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">03</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">04</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTwo;
