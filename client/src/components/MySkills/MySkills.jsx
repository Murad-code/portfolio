import React from "react";
import "./MySkills.scss";

import { ReactComponent as FrontEndIcon } from "./icons/Front-end.svg";
import { ReactComponent as BackEndIcon } from "./icons/Back-end.svg";

export default function MySkills() {
  return (
    <div id="MySkills" className="MySkills">
      <div className="section">
        <div className="section-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills">
          <div className="left card">
            <FrontEndIcon />
            <h3>Front-End</h3>
            <div className="skills-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              fuga, cumque asperiores temporibus facere reiciendis labore
              aperiam reprehenderit tempore officiis.
            </div>
          </div>
          <div className="right card">
            <BackEndIcon />
            <h3>Back-End</h3>
            <div className="skills-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              fuga, cumque asperiores temporibus facere reiciendis labore
              aperiam reprehenderit tempore officiis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
