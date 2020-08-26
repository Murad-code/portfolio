import React from "react";
import "./MySkills.scss";

import { ReactComponent as FrontEndIcon } from "./icons/Front-end.svg";
import { ReactComponent as BackEndIcon } from "./icons/Back-end.svg";
import { ReactComponent as OtherIcon } from "./icons/Other.svg";

export default function MySkills() {
  return (
    <div id="MySkills" className="MySkills section">
        <div className="section-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills">
          <div className="left card">
            <FrontEndIcon />
            <h3>Front-End</h3>
            <div className="skills-text">
              <ul className="list">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>React.js</li>
                <li>React Hooks</li>
                <li>Handlebars</li>
              </ul>
            </div>
          </div>
          <div className="middle card">
            <BackEndIcon />
            <h3>Back-End</h3>
            <div className="skills-text">
              <ul className="list">
                <li>Java</li>
                <li>C#</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Using API’s (Google, Spotify, Yelp)</li>
              </ul>
            </div>
          </div>
          <div className="right card">
            <OtherIcon />
            <h3>Other</h3>
            <div className="skills-text">
              <ul className="list">
                <li>SPSS</li>
                <li>Microsoft Azure</li>
                <li>Git</li> 
                <li>GitHub</li>
                <li>MVC Architecture</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
