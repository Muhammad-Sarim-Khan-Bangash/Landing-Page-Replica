import React from "react";
import Simage1 from "../Images/summer1.png";
import Simage2 from "../Images/summer2.png";
import Simage3 from "../Images/summer3.png";
import Simage4 from "../Images/summer4.png";
import Simage5 from "../Images/summer5.png";
import Simage6 from "../Images/summer6.png";
import Simage7 from "../Images/summer7.png";
import Simage8 from "../Images/summer8.png";
import Simage9 from "../Images/summer9.png";
import SummerHeading from "../Images/summer-heading.png";

const SummerDeals = () => {
  return (
    <div>
      <>
        <img src={SummerHeading} alt="" width="100%" />
        <div className="main-summer d-flex justify-content-between">
          <div>
            <img src={Simage1} alt="" />
          </div>
          <div>
            <img src={Simage2} alt="" />
          </div>
          <div>
            <img src={Simage3} alt="" />
          </div>
          <div>
            <img src={Simage4} alt="" />
          </div>
          <div>
            <img src={Simage5} alt="" />
          </div>
          <div>
            <img src={Simage6} alt="" />
          </div>
          <div>
            <img src={Simage7} alt="" />
          </div>
          <div>
            <img src={Simage8} alt="" />
          </div>
          <div>
            <img src={Simage9} alt="" />
          </div>
        </div>
        <div>
          <button className="btn btn-outline-dark float-right m-2 mr-5 mt-4 font-weight-bold">
            VIEW ALL
          </button>
        </div>
      </>
    </div>
  );
};

export default SummerDeals;
