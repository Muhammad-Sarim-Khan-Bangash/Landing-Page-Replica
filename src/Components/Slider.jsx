import React from "react";
import SliderImageOne from "../Images/banner-01.png";
import SliderImageTwo from "../Images/banner-02.png";
import SliderImageThree from "../Images/banner-03.png";
import SliderImageFour from "../Images/banner-04.png";
import SliderImageFive from "../Images/banner-05.gif";
import SliderImageSix from "../Images/banner-06.png";
import SliderImageSeven from "../Images/banner-07.png";
import SliderImageEight from "../Images/banner-08.gif";

const Slider = () => {
  return (
    <>
      <div className="banner">
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
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            <li data-target="#carouselExampleIndicators" data-slide-to={4} />
            <li data-target="#carouselExampleIndicators" data-slide-to={5} />
            <li data-target="#carouselExampleIndicators" data-slide-to={6} />
            <li data-target="#carouselExampleIndicators" data-slide-to={7} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SliderImageOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageTwo} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageThree} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageFour} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageFive} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageSix} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageSeven} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderImageEight} className="d-block w-100" alt="..." />
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
      </div>
    </>
  );
};

export default Slider;
