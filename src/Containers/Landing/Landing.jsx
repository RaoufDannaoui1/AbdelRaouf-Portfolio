import React from "react";
import WhoAmI from "../../Components/WhoAmI/WhoAmI";
import ButtonComp from "../../Components/ButtonComp/ButtonComp";
import DropDown from '../../Components/DropDown/DropDown'
import "./Landing.css";
import NetworkIcon from "../../Components/NetworkIcon/NetworkIcon";
export default function Landing() {
  return (
    <div>
      <section id="home" className="landing-container">
      <DropDown />
        <div className="landing">
          <WhoAmI />
          <ButtonComp
            text="More About Me"
            type="primary"
            link="#about"
          />
          </div>
          <div className="net-icon">
          <NetworkIcon />
          </div>
      </section>
    </div>
  );
}
