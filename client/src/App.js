import React from 'react';
import './App.scss';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import MySkills from './components/MySkills/MySkills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div id="App" className="App" data-aos="fade-down" >
      <Navbar />
      <Home />
      <AboutMe />
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
