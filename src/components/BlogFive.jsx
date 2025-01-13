import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { whyworkwithus } from "../constant";
const BlogFive = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="bg-dark2">
      <section className="blog-area-4 space position-relative">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Why Work With Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Partner With Us for Exceptional Results
                </h2>
                <p className="text-white">
                  Discover why businesses trust us to deliver outstanding
                  solutions, tailored to meet their unique needs and drive
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider5 slider-shadow">
            {whyworkwithus.map((post) => (
              <div key={post.id} className="col-lg-3 col-md-6 col-12 px-2 py-4">
                <div className="blog-card style4 h-100">
                  <div className="blog-img">
                    <img
                      src={post.img}
                      alt={post.title}
                      style={{
                        maxHeight: "100%",
                        objectFit: "cover",
                        aspectRatio: "1/1",
                      }}
                    />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogFive;
