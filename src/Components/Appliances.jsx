import React from "react";
import img1 from "../Images/appliances1.jpg";
import img2 from "../Images/appliances2.jpg";
import img3 from "../Images/appliances3.jpg";
import img4 from "../Images/appliances4.jpg";
import img5 from "../Images/appliances5.jpg";
import img6 from "../Images/appliances6.jpg";
import img7 from "../Images/appliances7.jpg";
import img8 from "../Images/appliances8.jpg";
import img9 from "../Images/appliances9.jpg";
import img10 from "../Images/appliances10.jpg";
import img11 from "../Images/appliances11.jpg";
import img12 from "../Images/appliances12.jpg";
import automotiveImage from "../Images/automotive.png";

const Appliances = () => {
  return (
    <>
      <div className="main-div mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img2} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={img4} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img5} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={img7} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img8} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img9} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={img10} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img11} alt="" />
          </div>
          <div className="col-md-4">
            <img src={img12} alt="" />
          </div>
        </div>
      </div>

      <div>
        <center>
          {" "}
          <img
            className="mt-5"
            style={{ width: "90%" }}
            src={automotiveImage}
            alt=""
          />
        </center>
      </div>
    </>
  );
};

export default Appliances;
