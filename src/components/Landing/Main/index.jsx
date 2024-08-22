import React, { useEffect, useState } from "react";
import classNames from "./main.module.scss";

//assests
import image1 from "../../../assets/images/home/image1.jpg";
import image2 from "../../../assets/images/home/image2.jpg";

const Main = () => {
  return (
    <div className={classNames.mainLanding} id="home">
      <div className={classNames.wrapper}>
        <div className={classNames.leftContainer}>
          <div className={classNames.title}>
            <div>Experience the Difference.</div>
            <div>Exceptional Quality. Affordable Luxury.</div>
          </div>
          <div className={classNames.desc}>
            We transform your vision into reality with quality craftsmanship,
            transparent processes, and unwavering satisfaction. Discover
            affordable luxury in our residential, commercial, apartment and
            villa projects.
          </div>
          <div className={classNames.btnsContainer}>
            <div className={classNames.coloredBtn}>Get Quote</div>
            <div
              className={classNames.transparentBtn}
              onClick={() =>
                window.open("https://maps.app.goo.gl/j3rcga5sdZiCGPZ5A")
              }
            >
              Contact Us
            </div>
          </div>
          <div className={classNames.projectDetails}>
            <div className={classNames.eachProject}>
              <div>06+</div>
              <div>Years Of Experience</div>
            </div>
            <div className={classNames.eachProject}>
              <div>20+</div>
              <div>Projects Completed</div>
            </div>
          </div>
        </div>
        <div className={classNames.rightContainer}>
          <div className={classNames.mainImageContainer}>
            <img src={image1} alt="image1" />
            <div className={classNames.miniImageContainer}>
              <img src={image2} alt="image2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
