import React from "react";
import Image1 from "../Images/shop-category1.png";
import Image2 from "../Images/shop-category2.png";
import Image3 from "../Images/shop-category3.png";
import Image4 from "../Images/shop-category4.png";
import Image5 from "../Images/shop-category5.png";
import Image6 from "../Images/shop-category6.png";
import Image7 from "../Images/shop-category7.png";
import Image8 from "../Images/shop-category8.png";
import Image9 from "../Images/shop-category9.png";
import Image10 from "../Images/shop-category10.png";
import Image11 from "../Images/shop-category11.png";
import ShopByCategoryImage from "../Images/shopbycategory.png";
import gif2 from "../Images/gif2.gif";

const ShopByCategory = () => {
  return (
    <>
      <img src={ShopByCategoryImage} alt="" width="100%" />
      <div className="shop-category d-flex justify-content-between">
        <div>
          <img src={Image1} alt="" />
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
        <div>
          <img src={Image3} alt="" />
        </div>
        <div>
          <img src={Image4} alt="" />
        </div>
        <div>
          <img src={Image5} alt="" />
        </div>
        <div>
          <img src={Image6} alt="" />
        </div>
        <div>
          <img src={Image7} alt="" />
        </div>
        <div>
          <img src={Image8} alt="" />
        </div>
        <div>
          <img src={Image9} alt="" />
        </div>
        <div>
          <img src={Image10} alt="" />
        </div>
        <div>
          <img src={Image11} alt="" />
        </div>
      </div>

      <div>
        <img className="mt-5" style={{ width: "100%" }} src={gif2} alt="" />
      </div>
    </>
  );
};

export default ShopByCategory;
