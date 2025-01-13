import React, { useEffect, useState } from "react";
import LandingPageHeader from "../Layout/LandingPageHeader";
import LandingBanner from "../LandingComponents/LandingBanner";
import LandingAbout from "../LandingComponents/LandingAbout";
import LandingService from "../LandingComponents/LandingService";
import LandingPageFooter from "../Layout/LandingPageFooter";
import Preloader from "../elements/Preloader";
import LandingWhyChoose from "../LandingComponents/LandingWhyChoose";
import LandingTestimonial from "../LandingComponents/LandingTestimonial";
import LandingContact from "../LandingComponents/LandingContact";
import BlogFive from "../components/BlogFive";
import TestimonialFour from "../components/TestimonialFour";
import ProcessTwo from "../components/ProcessTwo";
import FaqThree from "../components/FaqThree";

const LandingPage = ({ page }) => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {active === true && <Preloader />}
      <LandingPageHeader />
      <LandingBanner page={page} />
      <div className="bg-dark2 space-top">
        <LandingContact />
      </div>
      <div id="about">
        <LandingAbout page={page} />
      </div>
      <div id="service">
        <LandingService page={page} />
      </div>
      <div id="why-choose">
        <ProcessTwo />
      </div>
      <div id="testimonial">
        <TestimonialFour />
      </div>
      <BlogFive />
      <FaqThree />

      <div id="contact" className="bg-dark2 space-top">
        <LandingContact />
      </div>
      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
