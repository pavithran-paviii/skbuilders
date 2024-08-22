import React from "react";
import classNames from "./whyus.module.scss";
import { merits } from "../../../assets/constant/mapItems";

const WhyUs = () => {
  return (
    <div className={classNames.whyUs}>
      <div className={classNames.wrapper}>
        <div className={classNames.title}>
          <div>Why Choose</div>
          <div>SK Builders?</div>
        </div>
        <div className={classNames.ourMerits}>
          {merits?.map((eachMerits, index) => {
            return (
              <div
                className={classNames.eachMerit}
                key={eachMerits?.title + index}
              >
                <div className={classNames.meritTitle}>
                  <span>{React.createElement(eachMerits.icon)}</span>
                  <span>{eachMerits?.title}</span>
                </div>
                <div className={classNames.meritDesc}>{eachMerits?.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
