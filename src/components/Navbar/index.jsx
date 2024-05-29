import React, { useState } from "react";
import classNames from "./navbar.module.scss";

//constants
import { navigations } from "../../assets/constant/mapItems";

//assets
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function hamburgerFunc() {
    if (!mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Reset overflow to enable scrolling
    }
    setMobileNavOpen((prev) => !prev);
  }

  return (
    <div className={classNames.navbar}>
      <div className={classNames.wrapper}>
        {/* <img src="" alt="fullLogo" /> */}
        <div>
          <span>S</span>
          <span>K</span>
        </div>
        <div className={classNames.navigations}>
          {navigations?.map((eachNav, index) => {
            return (
              <div
                className={
                  eachNav?.title === selectedNav && classNames.selectedNav
                }
                onClick={() => {
                  setSelectedNav(eachNav?.title);
                  if (eachNav?.link) {
                    window.location.href = eachNav?.link;
                  }
                }}
              >
                {eachNav?.title}
              </div>
            );
          })}
        </div>
        <div
          className={classNames.submitBtn}
          onClick={() =>
            window.open("https://maps.app.goo.gl/j3rcga5sdZiCGPZ5A")
          }
        >
          Contact
        </div>
        <RxHamburgerMenu
          className={classNames.hamburgerIcon}
          onClick={hamburgerFunc}
        />
        <div
          className={classNames.mobileNavigations}
          style={{ height: mobileNavOpen ? "100vh" : "0" }}
        >
          <div
            className={classNames.navigations}
            style={{ display: mobileNavOpen ? "" : "none" }}
          >
            {navigations?.map((eachNav, index) => {
              return (
                <div
                  className={
                    eachNav?.title === selectedNav && classNames.selectedNav
                  }
                  onClick={() => {
                    setSelectedNav(eachNav?.title);
                    hamburgerFunc();
                    if (eachNav?.link) {
                      window.location.href = eachNav?.link;
                    }
                  }}
                >
                  {eachNav?.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
