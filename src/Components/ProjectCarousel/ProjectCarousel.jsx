import React from "react";
import { Carousel } from "antd";
import Project from "../Project/Project";

import proj1 from './ProjectImages/DNL.jpeg'
import proj2 from './ProjectImages/to-do.png'
import proj3 from './ProjectImages/wallet.png'
import proj4 from './ProjectImages/jash.png'


export default function ProjectCarousel() {
  return (
    <div>
      <Carousel autoplay dotPosition="left">
        <div className="cont">
          <Project img={proj1} title="Discover North Lebanon" desc="The best way to travel arround the north" />
        </div>
        <div className="cont">
          <Project img={proj2} title="To-Do List" desc="A simple app where you can manage your time" />
        </div>
        <div className="cont">
          <Project img={proj3} title="Wallet App" desc="An e-wallet to manage all your transactions" />
        </div>
        <div className="cont">
          <Project img={proj4} title="JASH Movies" desc="The best way to be aware of all new movies" />
        </div>
      </Carousel>
    </div>
  );
}
