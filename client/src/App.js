import React from 'react';
import './App.scss';
import Projects from './components/projects/Projects.js';
import Contact from './components/Contact.js';
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
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <div></div>
            </li>
            <li className="nav-item">
              <a href="#Home" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <span className="link-text">Home</span>
              </a>
            </li >
            <li className="nav-item">
              <a href="#AboutMe" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                <span className="link-text">About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" /></svg>
                <span className="link-text">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
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
