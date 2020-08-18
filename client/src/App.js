import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact.js';



// import ContactApi from './components/ContactApi';

function App() {
  const [onLandingPage, changeStatus] = useState(true)

  const check = (e) => {
    const element = document.getElementById('container');
    if (element.scrollTop > 400) {
      changeStatus(false);
    } else {
      changeStatus(true);
    }
  }

  const projectCards = [
    {
      title: 'Food-Finder',
      image: './images/Food-finder.png',
      description: 'description'
    },
    {
      title: 'Sorting Algorithm Visualiser',
      image: './images/Sorting-visualiser.png',
      description: 'description'
    },
    {
      title: 'Expense Tracker',
      image: './images/Expense-tracker.png',
      description: 'description'
    },
    {
      title: 'Finch Robot',
      image: './images/Finch-robot.png',
      description: 'description'
    },
    {
      title: 'Projectile Motion',
      image: './images/Projectile-motion.png',
      description: 'description'
    },

  ]

  return (
    <div className="App">
      {/* <ContactApi /> */}
      <nav className="nav-loadingtransition" data-aos="fade-right">
        <Navbar onLandingPage={onLandingPage} />
      </nav>
      <main id="container" className="container" data-aos="fade-down" onScroll={check}>
        <Home />
        <AboutMe />
        <Projects projectCards={projectCards} />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
