import React from "react";
import classNames from "./landing.module.scss";

//components
import Navbar from "../../components/Navbar";
import Main from "../../components/Landing/Main";
import AboutUs from "../../components/Landing/AboutUs";
import WhyUs from "../../components/Landing/WhyUs";
import OurServices from "../../components/Landing/OurServices";
import Reviews from "../../components/Landing/Reviews";
import OurTeam from "../../components/Landing/OurTeam";

const Landing = () => {
  return (
    <div className={classNames.landing}>
      <Navbar />
      <Main />
      <AboutUs />
      <WhyUs />
      <OurServices />
      <Reviews />
      <OurTeam />
      <div className={classNames.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.791190388743!2d78.1494562!3d8.8056782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef992020855d%3A0x6ae83c6cd1d34377!2sSK%20Builders!5e0!3m2!1sen!2sin!4v1715496131817!5m2!1sen!2sin"
          // width="800"
          height="600"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={classNames.copyRight}>
        © 2024 SK Builders. All Rights Reserved.
      </div>
    </div>
  );
};

export default Landing;
