import React from "react";
import './scrolldown.scss';

export default function Scrolldown() {
  return (
    <div className="scrolldown-container">
      <h3 className="scrolldown-text">Scroll down to find out more about me</h3>
      <div className="arrows-animation">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
