import React from "react";
import "./AboutMe.css";
import profile from "./profilPic.jpeg";

export default function AboutMe() {
  return (
    <div>
      <div className="information">
        <h3 className="section-title">ABOUT ME</h3>
        <h2 className="subTitle">Let me introduce myself</h2>
        <div className="profile-area">
          <img className="profile" src={profile} alt="my img" />
          <p className="text-area ">
            A passionate Front-End Web Developer, I have experience in designing
            web and mobile applications with JavaScript, Reactjs, Nodejs, and
            many other frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
