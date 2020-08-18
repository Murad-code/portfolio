import React from "react";
import './Projects.scss';

export default ({ projectCards }) => {

  return (
    <div id="Projects" className="Projects section" >
      <div className="section-title">
        <h1>Projects</h1>
      </div>
      <div className="project-list card">
        {projectCards &&
          projectCards.map(({ title, image, description }, index) => (
            <div className="project-card">

              <img className="project-image" src={require(`${image}`)} alt="img" />
              <div className="project-title">{title}</div>


              <div className="project-description">{description}</div>
              <a href="#Home" className="btn">
                Read more
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
