import React from "react";
import classNames from "./aboutus.module.scss";

//assests
import image3 from "../../../assets/images/home/image3.jpg";

const AboutUs = () => {
  return (
    <div className={classNames.aboutUs} id="about">
      <div className={classNames.wrapper}>
        <div className={classNames.leftContainer}>
          <div className={classNames.imageContainer}>
            <img src={image3} alt="image3" />
          </div>
        </div>
        <div className={classNames.rightContainer}>
          <div className={classNames.title}>
            About <span>Us</span>
          </div>
          <div
            className={classNames.title}
            style={{ textDecoration: "none", marginBottom: "-1.5rem" }}
          >
            Building Your Dreams, One Strong Foundation
          </div>
          <div className={classNames.desc}>
            SK Builders is more than just a construction company; we're your
            partners in creating the spaces you love. For the past six years,
            we've been dedicated to delivering exceptional results, built on a
            foundation of trust and quality. We believe in a collaborative
            approach, working closely with you to bring your vision to life,
            from the initial concept to the final flourish.
          </div>
          <h4 style={{ marginBottom: "-1.5rem" }}>
            Our commitment to excellence is rooted in four pillars of trust:
          </h4>
          <ul className={classNames.keyPrinciples}>
            <li>Quality with Zero Compromise</li>
            <li>Transparent Legal Procedures</li>
            <li>On-Time Project Completion</li>
            <li>100% Customer Satisfaction</li>
          </ul>
          <div className={classNames.submitBtn}>Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
