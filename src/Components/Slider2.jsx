import React from "react";
import Image1 from "../Images/slider-1.png";
import Image2 from "../Images/slider-2.png";
import Image3 from "../Images/slider-3.gif";

const Slider2 = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <i
          class="fas fa-arrow-circle-left fa-3x"
          style={{ opacity: "0.5" }}
        ></i>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <i
          class="fas fa-arrow-circle-right fa-3x"
          style={{ opacity: "0.5" }}
        ></i>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider2;
