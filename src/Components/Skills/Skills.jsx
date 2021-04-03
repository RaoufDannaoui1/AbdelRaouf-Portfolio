import React from "react";
import ProgressBar from '../ProgressBar/ProgressBar'
import "./Skills.css";

export default function Skills() {
  return (
    <div className="sub-information">
      <div className="profile-sec">
        <h3 className="profile-title">SKILLS</h3>
        <p className="about-text-area">
          I'm a Fast learner, Hardworker, Natural Leader and Technically
          skilled. Studied many power skill courses such as Product Management
          and Business Comunications Worked with HTML5, CSS3, JavaScript, Reactjs and many other Frameworks.
        </p>
      </div>
      <div className="skill-area">
        <h4 className="info-title skill-title">HTML5 & CSS3</h4>
        <ProgressBar amount="95" />
       
          <h4 className="info-title skill-title">JAVASCRIPT</h4>
          <ProgressBar amount="85" />

          <h4 className="info-title skill-title">REACTJS</h4>
          <ProgressBar amount="90" />
      </div>
    </div>
  );
}
