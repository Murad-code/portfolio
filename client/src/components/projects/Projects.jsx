import React, { useState } from "react";
import "./Projects.scss";
import Carousel from "nuka-carousel";

export default function Projects() {
  const [isOpen, changeStatus] = useState(false);
  const [title, setTitle] = useState();
  const [images, setImages] = useState([]);

  const closeBackdrop = (e) => {
    changeStatus(false)
  }

  const ModalComponent = () => {
    return (
      <div className="Modal">
        <div className="Backdrop" onClick={closeBackdrop}>
          <div className="carousel-container" onClick={(e) => e.stopPropagation() }>
            <Carousel className="carousel">
              <img src={require(`${images[0]}`)} alt="img" />
              <img src={require(`${images[1]}`)} alt="img" />
            </Carousel>
          </div>
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
          <a href="#Home" className="btn">
            Read more
          </a>
        </div>
        {isOpen ? <ModalComponent /> : null}
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
    image: ["./images/Food-finder/1.png", "./images/Food-finder/2.png"],
    description: "description",
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualiser",
    image: ["./images/Sorting-visualiser.png", "./images/Food-finder/2.png"],
    description: "description",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: ["./images/Expense-tracker.png", "./images/Food-finder/2.png"],
    description: "description",
  },
  {
    id: 4,
    title: "Finch Robot",
    image: ["./images/Finch-robot.png", "./images/Food-finder/2.png"],
    description: "description",
  },
  {
    id: 5,
    title: "Projectile Motion",
    image: ["./images/Projectile-motion.png", "./images/Food-finder/2.png"],
    description: "description",
  },
];
