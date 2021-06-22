import React from "react";
import logo from "../Images/logo.svg";

const Header = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#FEEE00" }}
        className="align-items-center"
      >
        <div className="overflow-hidden header">
          <div className="row">
            <div className="col-md-1 ">
              <img src={logo} alt="" className="mt-3" />
            </div>
            <div className="col-md-7">
              <input
                className="form-control mr-sm-2 mt-3 ml-2 p-3 searchbar"
                type="search"
                placeholder="What are you looking for?"
                style={{
                  width: "100%",
                  border: "none !important",
                  outline: "none !important",
                }}
              />
            </div>
            <div className="col-md-1 mt-4">
              <p>العربية</p>
            </div>
            <div className="col-md-1 pt-2 d-flex">
              <img
                src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                alt=""
                style={{ paddingRight: "2px", marginTop: "-15px" }}
              />
              <p>
                {" "}
                <span style={{ fontSize: "12px" }}> Ship to</span> <br />
                <b>UAE</b> <i className="fas fa-sort-down"></i>
              </p>
            </div>
            <div className="col-md-1 d-flex mt-4">
              <p className="pr-2">
                <b style={{ fontSize: "14px" }}>Sign In</b>
              </p>{" "}
              <i className="far fa-user mt-1 user"></i>
            </div>
            <div className="col-md-1 d-flex mt-4">
              <p className="pr-2">
                <b style={{ fontSize: "14px" }}>Cart</b>
              </p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
