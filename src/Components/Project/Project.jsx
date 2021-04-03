import React from "react";
import "./Project.css";

export default function Project({ img, title, desc }) {
  return (
    <div className="card">
      <img className="proj-img" src={img} alt="proj img" />
      <div className="card-desc">
        <h3>{title}</h3>
        <h4>{desc}</h4>
      </div>
    </div>
  );
}
