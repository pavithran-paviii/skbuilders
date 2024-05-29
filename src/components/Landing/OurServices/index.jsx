import React from "react";
import classNames from "./ourservices.module.scss";

const OurServices = () => {
  return (
    <div className={classNames.ourServices} id="services">
      <div className={classNames.wrapper}>
        <div className={classNames.title}>
          Our <span>Services</span>
        </div>
        <div className={classNames.desc}>
          We offer comprehensive suite of construction services for residential
          & commercial projects. Our expertise spans custom home building,
          renovations, office and retail space construction, healthcare and
          educational facility development. With a team of skilled
          professionals, we deliver exceptional results through quality
          craftsmanship, adherence to building codes, timely completion, and
          cost-effective solutions.
        </div>
        <div className={classNames.allServices}>
          <div className={classNames.eachService}>
            <div className={classNames.icon}></div>
            <div className={classNames.title}>House planning</div>
            <div className={classNames.desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              inventore ad velit sunt nihil similique earum quis officia minima
              labore id nobis quae, nostrum laborum voluptas odio voluptate
              assumenda cum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
