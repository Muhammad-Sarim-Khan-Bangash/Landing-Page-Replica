import React from "react";

const Card = (props) => {
  return (
    <>
      <div style={{ height: "auto", width: "90%" }} className="p-3 ">
        <img
          src={props.imageSrc}
          width="100%"
          alt=""
          style={{ height: "250px" }}
        />
        <div className="p-3">
          <p className="text-muted" style={{ fontSize: "14px" }}>
            {props.title}
          </p>
          <p
            className="text-muted font-weight-bold"
            style={{ marginTop: "-8px" }}
          >
            {props.price}
          </p>
          <p style={{ fontSize: "13px", marginTop: "-10px" }}>{props.date}</p>
          <p
            style={{ fontSize: "13px", marginTop: "-15px" }}
            className="text-muted font-weight-bold"
          >
            {props.day}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-sm p-0 pl-1 pr-1 font-weight-bold"
              style={{
                backgroundColor: "#feee00",
                borderRadius: "30px 0 0 30px",
                fontStyle: "italic",
              }}
            >
              {props.button}
            </button>
            <i
              style={{ color: "orange", fontSize: "15px" }}
              className="fas fa-star"
            >
              {props.star}
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
