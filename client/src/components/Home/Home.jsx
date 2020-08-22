import React from 'react'
import './Home.scss';
import Scrolldown from './ScrollDown/scrolldown';

export default function home() {
    return (
        <div id="Home" className="Home section">
          <div className="title">
            <div className="title-text">
              <h1>Hi, I'm Murad.</h1>
              <h2>I'm a 2nd year Computer Science student at Brunel University</h2>
            </div>
            <Scrolldown />
          </div>
        </div>
    )
}
