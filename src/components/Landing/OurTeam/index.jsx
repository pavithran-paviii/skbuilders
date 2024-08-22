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
        <h1 style={{ marginTop: "3rem", textAlign: "center" }}>
          Building Better, Together
        </h1>
        <div className={classNames.desc}>
          We pride ourselves on having a team of highly skilled and dedicated
          professionals who are passionate about their craft. Our team comprises
          experienced architects, engineers, project managers, and skilled
          labourers, all working together to ensure your project is completed to
          the highest standards.
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
