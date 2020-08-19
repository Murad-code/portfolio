import React from "react";
import './Navbar.scss';

import {ReactComponent as HomeIcon} from './Home.svg';
import {ReactComponent as AboutMeIcon} from './AboutMe.svg';
import {ReactComponent as ProjectsIcon} from './Projects.svg';
import {ReactComponent as ContactIcon} from './Contact.svg';


export default function Navbar(props) {
  return (
    <nav className={props.onLandingPage ? "navbar-home" : "navbar"}>
      <ul className="navbar-nav">
        <li className="logo">
          <div></div>
        </li>
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
