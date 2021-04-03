import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Profile from "../../Components/Profile/Profile";
import Skills from "../../Components/Skills/Skills";
import ButtonComp from "../../Components/ButtonComp/ButtonComp";

import "./About.css";

export default function About() {
  return (
    <div>
      <section id="about" className="about-container">
        <AboutMe />
        <div className="pro">
          <Profile />
          <Skills />
        </div>
        <div className="button-area">
        <ButtonComp
            text="Download My CV"
            link="https://drive.google.com/file/d/1bvxHpOeqklwH1UTFPtxvZ9x4gTGvuI_c/view?usp=sharing"
            type="primary"
          />
        <ButtonComp text="Hire Me" link="#contact" />
        </div>
      </section>
    </div>
  );
}
