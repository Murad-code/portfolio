import React, { useState } from "react";
import "./Projects.scss";
import Carousel from "nuka-carousel";

export default function Projects() {
  const [isOpen, changeStatus] = useState(false);
  const [title, setTitle] = useState();
  const [images, setImages] = useState([]);

  const closeBackdrop = (e) => {
    changeStatus(false);
  };

  const ModalComponent = ({ title, image, description }) => {
    return (
      <div className="Modal" onClick={closeBackdrop}>
        <div
          className="carousel-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Carousel className="carousel">
            <video className="video" controls>
              <source src={require(`${images[2]}`)} type="video/mp4" />
            </video>
            <img src={require(`${images[0]}`)} alt="img" />
            <img src={require(`${images[1]}`)} alt="img" />
          </Carousel>
        </div>
      </div>
    );
  };

  const ProjectList = () =>
    projectCards.map(({ id, title, image, description }, index) => (
      <div key={id}>
        <div className="project-card">
          <div
            className="project-image"
            onClick={() => {
              changeStatus(!isOpen);
              setTitle(title);
              setImages(image);
            }}
          >
            <Carousel className="project-image">
              <img src={require(`${image[0]}`)} alt="img" />
              <img src={require(`${image[1]}`)} alt="img" />
            </Carousel>
          </div>
          <div className="project-title">{title}</div>

          <div className="project-description">{description}</div>
          
          {/* <a href="#Home" className="btn">
            Read more
          </a> */}
        </div>
        {isOpen ? (
          <ModalComponent
            title={title}
            image={image}
            description={description}
          />
        ) : null}
        {/* <ModalComponent title={title} image={image} description={description} closeBackdrop={closeBackdrop} isOpen={isOpen}/> */}
      </div>
    ));

  return (
    <div id="Projects" className="Projects section">
      <div className="section-title">
        <h1>Projects</h1>
      </div>
      <div className="project-list card">
        <ProjectList />
      </div>
    </div>
  );
}

const projectCards = [
  {
    id: 1,
    title: "Food-Finder",
    image: [
      "./images/Food-finder/1.png",
      "./images/Food-finder/2.png",
      "./images/Food-finder/3.mp4",
    ],
    description: "Restaurant finder webapp where users can enter a term and location to find places to eat and filter by best match, rating, and most reviews. This is done by using Yelp's Fusion API and Google's OAuth API is integrated so you can store favourites to your Google account.",
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualiser",
    image: [
      "./images/Sorting-visualiser/1.png",
      "./images/Sorting-visualiser/2.png",
      "./images/Sorting-visualiser/3.mp4",
    ],
    description: "Visualiser tool to help teach/learn how different sorting algorithms work. Currently has: merge sort, bubble sort, insertion sort, and quick sort",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: [
      "./images/Expense-tracker/1.png",
      "./images/Expense-tracker/2.png",
      "./images/Expense-tracker/3.mp4",
    ],
    description: "CRUD website using the MERN stack to allow user to add/delete transactions and calculate your total expenses which is stored in a database. Reloading the page will retain previously stored data.",
  },
  {
    id: 4,
    title: "Projectile Motion",
    image: [
      "./images/Projectile-motion/1.png",
      "./images/Projectile-motion/2.png",
      "./images/Projectile-motion/3.mp4",
    ],
    description: "A visualising tool I created for my sixth form's physics department to help teach projectile motion to A Level students. I didn't use Unity's pre-made gravity effects and instead created my own using the suvat equations of motion. Also, it has a questions mode which can vary in difficulty and shows the solution for each of the randomly generated questions. A SQLite database is used to store all the templates for the questions and answers and the actual values for each question is calculated and filled in before being displayed to the user.",
  },
  {
    id: 5,
    title: "Finch Robot",
    image: [
      "./images/Finch-robot/1.png",
      "./images/Finch-robot/2.png",
      "./images/Finch-robot/3.mp4",
    ],
    description: "A program which utilises the Finch robot hardware to complete a series of tasks for my first year university project. For the dance feature, I had to create all the algorithms to convert the hexadecimal number into binary, octal, and decimal equivalents without relying on Java's built-in conversion methods. Each of these converted values are responsible for controlling the robot's LED light colours, direction of movement, and speed. In the video you will see that I have additionally created a GUI to display the information and allow the user to import previous data or export the table of data to Microsoft Excel.",
  },

];
