import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="AboutMe section">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="card-list">
        <div className="WhoAmI card small">
          <h3>Who Am I?</h3>
          <p>
            I'm an aspiring full stack developer who enjoys building
            apps/websites and solving problems. Currently, I am studying for a
            BSc Computer Science degree at Brunel University and have covered
            topics such as Object Oriented Programming and languages such as
            Java as well as utilising programs such as SPSS for data analysis
            and Microsoft Azure to simulate an agile
            environment for team projects. During my first
            year, I was taught plenty of the theory and history of computer
            science, which I do think has proven to be beneficial in
            understanding back-end development especially when learning data
            structures and algorithms which I will be expanding on this year.
          </p>
        </div>
        <div className="PersonalStudies card small">
          <h3>Personal Studies</h3>
          <p>
            Aside from university studies, I have been focused on developing my
            skills as a front-end developer. This has led me to complete the Web
            Development course on Codecademy from which I learnt the
            fundamentals. Using this knowledge, I have built CRUD
            websites/webapps using the MERN stack such as the Expense Tracker
            and Food-Finder. Also, I’ve tried to incorporate what I’ve learnt
            from university and my front end skills to develop a sorting
            visualiser project which required an in depth understanding of the
            different sorting algorithms as well as how to break it down in a
            manner which can be displayed sequentially on the front end I found
            this to be a very successful method for understanding sorting
            algorithms and will be applying this process in the future, for
            example creating a binary search tree visualiser.
          </p>
        </div>
        <div className="Future card small">
          <h3>What I want to learn next</h3>
          <p>
            Ideally, I would like to work on an android app using Java in order
            to create a more interactive application compared to my current
            Finch robot program (plus I will be using Android Studio this year
            at university for my main project so this will be great
            preparation!). I believe creating more projects in Java will allow
            me to get a deeper understanding of the language which will be
            important as I intend to use it for future programming competitions.
            In addition to my current learning path for web development, I’ve
            recently been inspired by web scraping videos on YouTube and the
            experiences I’ve had using API’s on other projects. As a result, I
            will be creating a basic web scraping site to learn the fundamentals
            and then implementing the things I learn to create another project
            utilising different API’s (currently considering using Google maps
            platform).
          </p>
        </div>
      </div>
    </div>
  );
}
