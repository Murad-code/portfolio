import React from 'react';
import './App.scss';
import Projects from './components/projects/Projects.js';
import Contact from './components/Contact.js';
import Navbar from './components/navbar/Navbar';
// import ContactApi from './components/ContactApi';

function App() {
  const projectCards = [
    {
      title: 'Food-Finder',
      image: './Food-finder.png',
      description: 'description'
    },
    {
      title: 'Sorting Algorithm Visualiser',
      image: './Sorting-visualiser.png',
      description: 'description'
    },
    {
      title: 'Expense Tracker',
      image: './Expense-tracker.png',
      description: 'description'
    },
    {
      title: 'Finch Robot',
      image: './Finch-robot.png',
      description: 'description'
    },
    {
      title: 'Projectile Motion',
      image: './Projectile-motion.png',
      description: 'description'
    },

  ]

  return (
    <div className="App">
      {/* <ContactApi /> */}
      <div className="nav-loadingtransition" data-aos="fade-right">
        <Navbar />
      </div>

      <main className="container" data-aos="fade-down">
        <div id="Home" className="Home section">
          <div className="title">
            <div className="title-text">
              <h1>Hi, I'm Murad.</h1>
              <h2>I'm a 2nd year Computer Science student at Brunel University</h2>
            </div>
          </div>

        </div>
        <div id="AboutMe" className="AboutMe section" >
          <div className="section-title">
            <h1>About Me</h1>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo autem doloribus, suscipit eos delectus magnam dolore maiores, expedita</p>
            <h2>My Skills</h2>
            <div className="skills">
              <div className="skills-child">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>
                <h3>Front-End</h3>
                <div className="skills-text skills-border">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga, cumque asperiores temporibus facere reiciendis labore aperiam reprehenderit tempore officiis.
              </div>
              </div>
              <div className="skills-child">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                <h3>Back-End</h3>
                <div className="skills-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga, cumque asperiores temporibus facere reiciendis labore aperiam reprehenderit tempore officiis.
              </div>
              </div>
            </div>
            <br />
          </div>

        </div>
        <div id="Projects" className="Projects section" >
          <Projects projectCards={projectCards} />
        </div>
        {/* <div id="Contact" className="Contact section card" >
          <Contact />
        </div> */}
      </main>
    </div>
  );
}

export default App;
