import React from "react";
import ExclusiveDeals from "../Images/exclusiveDeals.png";
import Deal1 from "../Images/deal1.png";
import Deal2 from "../Images/deal2.png";

const Deals = () => {
  return (
    <div>
      <img src={ExclusiveDeals} alt="" style={{ width: "100%" }} />
      <div className="deals d-flex justify-content-around">
        <div>
          <img style={{ width: "95%" }} src={Deal1} alt="" />
        </div>
        <div>
          <img style={{ width: "95%" }} src={Deal2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Deals;
