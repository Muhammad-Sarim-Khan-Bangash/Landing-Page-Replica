import React from "react";
import discountImage from "../Images/discount.png";

const DiscountOffer = () => {
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src={discountImage}
        alt=""
        className="mt-4 mb-5"
      />
    </div>
  );
};

export default DiscountOffer;
