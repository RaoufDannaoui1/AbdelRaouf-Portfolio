import React from "react";
import "./Profile.css";

export default function ProfileSkill() {
  return (
      <div className="sub-information">
        <div className="profile-sec">
          <h3 className="profile-title">PROFILE</h3>
          <p className="about-text-area">I am a Front-End Web Developer who's recently graduated from a 5 months intenseve web development Bootcamp provided by Re:Coded. Also I'm a Computer Engineer Student at Lebanese International University.</p>
        </div>
        <div className="info-subTitle">
            <h4 className="info-title">FULLNAME:</h4>
            <p>AbdelRaouf AbdelSattar Dannaoui</p>

            <h4 className="info-title">BIRTH DATE:</h4>
            <p>November 24, 2000</p>

            <h4 className="info-title">EMAIL:</h4>
            <p>dannaoui.abdelraouf@gmail.com</p>
        </div>
      </div>
  );
}
