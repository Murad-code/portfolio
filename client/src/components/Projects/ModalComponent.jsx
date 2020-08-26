import React from "react";
import Carousel from "nuka-carousel";

export default function ModalComponent({
  title,
  image,
  description,
  closeBackdrop,
  isOpen,
}) {
  const Modal = () => {
      const Title = title;
      const Image = image;
      const Description = description
    return (
        <div>
        <div className="Modal" onClick={closeBackdrop}>
          <div
            className="carousel-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <CarouselComponent /> */}
            <Carousel className="carousel">
              <img src={require(`${Image[0]}`)} alt="img" />
              <img src={require(`${Image[1]}`)} alt="img" />
            </Carousel>
          </div>
        </div>
      </div>
    )
  };

  return <>{isOpen ? <Modal /> : null}</>;
}
