import React from 'react';
import './App.scss';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import MySkills from './components/MySkills/MySkills.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <div id="App" className="App" data-aos="fade-down" >
      <Home />
      <Navbar />
      <AboutMe />
      <MySkills />
      <Projects />
    </div>
  );
}

export default App;
