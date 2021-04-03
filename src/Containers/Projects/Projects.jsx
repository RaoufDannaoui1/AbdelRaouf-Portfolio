import React from "react";
import ProjectCarousel from "../../Components/ProjectCarousel/ProjectCarousel";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <section id="projects" className="projects-container">
        <h3 className="section-title">MY PROJECTS</h3>
        <div className="projCon">
          <ProjectCarousel />
        </div>
      </section>
    </div>
  );
}
