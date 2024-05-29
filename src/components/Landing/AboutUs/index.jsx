import React from "react";
import classNames from "./aboutus.module.scss";

//assests
import image1 from "../../../assets/images/home/image1.jpg";

const AboutUs = () => {
  return (
    <div className={classNames.aboutUs} id="about">
      <div className={classNames.wrapper}>
        <div className={classNames.leftContainer}>
          <div className={classNames.imageContainer}>
            <img src={image1} alt="image1" />
          </div>
        </div>
        <div className={classNames.rightContainer}>
          <div className={classNames.title}>
            About <span>Us</span>
          </div>
          <div className={classNames.desc}>
            At SK Builders, we are a construction firm that has been dedicated
            to delivering exceptional results for the past five years. Our
            journey began with a vision to revolutionize the construction
            industry by prioritizing quality, effective management, and
            unwavering customer satisfaction.
          </div>
          <ul className={classNames.keyPrinciples}>
            <li>
              Quality Obsession, Meticulous Craftsmanship, Zero Compromises.
            </li>
            <li>Effective Planning, Seamless Execution, On-Time Delivery.</li>
            <li>Eco-Friendly, Sustainable, Green Building Solutions.</li>
            <li>
              Client-Focused, Exceeding Expectations, Building Relationships.
            </li>
          </ul>
          <div className={classNames.submitBtn}>Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
