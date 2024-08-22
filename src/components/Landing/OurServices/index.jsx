import React from "react";
import classNames from "./ourservices.module.scss";
import { allServices } from "../../../assets/constant/mapItems";

const OurServices = () => {
  return (
    <div className={classNames.ourServices} id="services">
      <div className={classNames.wrapper}>
        <div className={classNames.title}>
          Our <span>Services</span>
        </div>
        <h1 style={{ marginTop: "3rem", textAlign: "center" }}>
          Your Vision, Our Expertise
        </h1>
        <div className={classNames.desc}>
          We offer a comprehensive range of services to meet all your
          construction needs. Our expertise ensures that every project, whether
          big or small, is executed with precision and excellence. Discover our
          wide array of services designed to bring your vision to life.
        </div>
        <div className={classNames.allServices}>
          {allServices?.map((eachService, index) => {
            return (
              <div
                className={classNames.eachService}
                key={eachService?.title + index}
              >
                <div className={classNames.icon}>
                  {React.createElement(eachService.icon)}
                </div>
                <div className={classNames.title}>{eachService?.title}</div>
                <div className={classNames.desc}>{eachService?.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
