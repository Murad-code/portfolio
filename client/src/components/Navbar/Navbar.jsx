import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import { ReactComponent as HomeIcon } from "./icons/Home.svg";
import { ReactComponent as AboutMeIcon } from "./icons/AboutMe.svg";
import { ReactComponent as MySkillsIcon } from "./icons/MySkills.svg";
import { ReactComponent as ProjectsIcon } from "./icons/Projects.svg";
import { ReactComponent as ContactIcon } from "./icons/Contact.svg";

export default function Navbar(props) {
  let listener = null;
  const [scrollState, setScrollState] = useState(true);

  // Responsible for changing navbar background on scroll
  useEffect(() => {
    const element = document.getElementById("App");
    listener = element.addEventListener("scroll", (e) => {
      var scrolled = element.scrollTop;

      if (window.innerWidth > 600) {
        if (scrolled < 600 || (scrolled > 1100 && scrolled < 1900)) {
          setScrollState(true);
        } else {
          setScrollState(false);
        }
      }

      if (window.innerWidth < 600) {
        if (scrolled < 600 || (scrolled > 1700 && scrolled < 3400)) {
          setScrollState(true);
        } else {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <nav className={scrollState ? "navbar-home" : "navbar"}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#Home" className="nav-link">
            <HomeIcon />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#AboutMe" className="nav-link">
            <AboutMeIcon />
            <span className="link-text">About Me</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#MySkills" className="nav-link">
            <MySkillsIcon />
            <span className="link-text">My Skills</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#Projects" className="nav-link">
            <ProjectsIcon />
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#Contact" className="nav-link">
            <ContactIcon />
            <span className="link-text">Contact</span>
          </a>
        </li>
        {/* <li className="nav-item">
            <a href="#GitHub" className="nav-link">
            </a>
            <span className="link-text">GitHub</span>
          </li>
          <li className="nav-item">
            <a href="#Email" className="nav-link">
            </a>
            <span className="link-text">Email</span>
          </li> */}
      </ul>
    </nav>
  );
}
