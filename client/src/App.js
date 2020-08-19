import React, { useState } from 'react';
import './App.scss';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact.js';

// import ContactApi from './components/ContactApi';

function App() {
  const [onLandingPage, changeStatus] = useState(true)

  const check = (e) => {
    // const element = document.getElementById('container');
    if (e.target.scrollTop > 400) {
      changeStatus(false);
    } else {
      changeStatus(true);
    }
  }

  return (
    <div className="App">
      {/* <ContactApi /> */}
      <nav className="nav-loadingtransition" data-aos="fade-right">
        <Navbar onLandingPage={onLandingPage} />
      </nav>
      <main id="container" className="container" data-aos="fade-down" onScroll={check}>
        <Home />
        <AboutMe />
        <Projects />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
