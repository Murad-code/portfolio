import React from 'react';
import './App.scss';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact.js';

function App() {
  return (
    <div id="App" className="App" data-aos="fade-down" >
      <Navbar />
      <Home />
      <AboutMe />
      <MySkills />
      <Projects />
    </div>
  );
}

export default App;
