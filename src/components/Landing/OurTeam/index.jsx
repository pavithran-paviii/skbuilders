import React from "react";
import classNames from "./ourteam.module.scss";

//assets
import madhu from "../../../assets/images/team/madhu.jpg";

const OurTeam = () => {
  return (
    <div className={classNames.ourTeam}>
      <div className={classNames.wrapper}>
        <div className={classNames.title}>
          Our <span>Team</span>
        </div>
        <div className={classNames.desc}>
          Our team comprises highly skilled and experienced individuals from
          various disciplines, each bringing their unique expertise to the
          table.At the heart of our operations are our skilled tradespeople,
          including carpenters, masons, electricians, and plumbers. Their
          exceptional craftsmanship and commitment to quality are evident in
          every aspect of their work, ensuring that each project is a testament
          to our commitment to excellence.
        </div>
        <div className={classNames.allTeamMembers}>
          <div className={classNames.eachMember}>
            <img src={madhu} alt="member" className={classNames.icon} />
            <div className={classNames.name}>Madhu</div>
            <div className={classNames.role}>Engineer</div>
            <div className={classNames.company}>SK Builders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
