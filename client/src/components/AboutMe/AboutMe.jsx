import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="AboutMe section">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="card">
        <p className="text">
          I'm an aspiring full stack developer inspired by the ability to fully
          create apps/websites from start to finish.
        </p>
        <br />
        <p className="text">
          Currently, I am studying for a BSc Computer Science degree at Brunel
          University and have covered topics such as Object Oriented Programming
          and languages such as Java as well as utilising programs such as SPSS
          for data analysis and Microsoft Azure for team projects to simulate
          how an agile environment functions when building a solution to a
          problem.
        </p>
        <br/>
        <p className="text">
          During my first year, we studied plenty of the theory and history of
          computer science, which I do think has proven to be beneficial in
          understanding back-end development especially when learning data
          structures and algorithms.
        </p>
        <br/>
        <p className="text">
          Outside of uni work, I have been focused on developing my skills as a
          front-end developer. This has led me to complete the Web Development
          course on Codecademy from which I learnt the fundamentals. Using this
          knowledge, I have built full-stack websites/webapps using the MERN
          stack.
        </p>
        <br />
      </div>
    </div>
  );
}
