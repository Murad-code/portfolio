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

  const CarouselComponent = () => {
    return (
      <Carousel className="carousel">
        <img src={require(`${images[0]}`)} alt="img" />
        <img src={require(`${images[1]}`)} alt="img" />
      </Carousel>
    );
  };

  const ModalComponent = ({ title, image, description }) => {
    return (
      <div className="Modal" onClick={closeBackdrop}>
        <div
          className="carousel-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* <CarouselComponent /> */}
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
          <a href="#Home" className="btn">
            Read more
          </a>
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
    description: "description",
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualiser",
    image: [
      "./images/Sorting-visualiser/1.png",
      "./images/Sorting-visualiser/2.png",
      "./images/Sorting-visualiser/3.mp4",
    ],
    description: "description",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: [
      "./images/Expense-tracker/1.png",
      "./images/Expense-tracker/2.png",
      "./images/Expense-tracker/3.mp4",
    ],
    description: "description",
  },
  {
    id: 4,
    title: "Projectile Motion",
    image: [
      "./images/Projectile-motion/1.png",
      "./images/Projectile-motion/2.png",
      "./images/Projectile-motion/3.mp4",
    ],
    description: "description",
  },
  {
    id: 5,
    title: "Finch Robot",
    image: [
      "./images/Finch-robot/1.png",
      "./images/Finch-robot/2.png",
      "./images/Finch-robot/3.mp4",
    ],
    description: "description",
  },

];
