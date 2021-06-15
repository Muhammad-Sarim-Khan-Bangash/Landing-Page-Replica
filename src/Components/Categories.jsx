import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="hnav flex alc">
        <button className="view-cates flex alc">
          <h6
            style={{
              paddingTop: "5px",
              color: "blue",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            ALL CATEGORIES
          </h6>
          <button className="btn-down">
            <i
              style={{
                paddingTop: "5px",
                color: "blue",
                marginLeft: "4px",
                marginTop: "0px",
                fontSize: "20px",
              }}
              class="fas fa-chevron-down"
            ></i>
          </button>
        </button>
        <div className="categories pl-5">
          <a href="#">ELECTRONICS</a>
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">HOME</a>
          <a href="#">BEAUTY & FRAGRANCE</a>
          <a href="#">BABY & TOYS</a>
          <a href="#">GROCRY</a>
          <a href="#">SPORTS</a>
          <a href="#">THE DUBAI MALL STORE</a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
