import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/ServiceInnerDetails";
import FooterFive from "../Layout/Footer";
import Header from "../Layout/Header";
import { useParams } from "react-router-dom";
import { services } from "../constant";
import Footer from "../Layout/Footer";

const ServiceDetails = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  const { id } = useParams();
  const service = services[id - 1];
  console.log(id, service, "asdfasdf");
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Service Details"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Service Details" />

      {/* ServiceDetails */}
      <ServiceInnerDetails service={service} />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default ServiceDetails;
