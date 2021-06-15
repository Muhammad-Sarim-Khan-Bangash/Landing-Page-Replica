import React, { useState } from "react";
import Card4 from "../Components/Card3";

const Product4 = () => {
  const [product, setProduct] = useState([
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1590872930/N30340542A_1.jpg",
      title: "Xiomi Digital Display Electric tyre Pump",
      price: "AED 121.85",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.4",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1532588030/N15952285A_1.jpg",
      title: "KKmoon Scratch-Resistant Full Good Quality",
      price: "AED 52.50",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "3.4",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1524892857/N14423157A_1.jpg",
      title: "ATCA 42-piece First Aid Kit Set New",
      price: "AED 18.40",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "5.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1590873121/N34255316A_1.jpg",
      title: "BLACK+DECKER 12V 160 PSI Air Compressor",
      price: "AED 299.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1607060985/N42711555A_1.jpg",
      title: "Baseus Dynamic Eye Compact Pump",
      price: "AED 179.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.5",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1557751560/N10991962A_1.jpg",
      title: "Michelin Micro Tyre Designed For Topping",
      price: "AED 110.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.7",
    },
  ]);
  return (
    <>
      <h5 className="mt-5 ml-4 font-weight-bold text-dark">
        Top picks in auto parts & accessories
      </h5>
      <div className="row p-0 m-0">
        {product.map((e, i) => {
          return (
            <div key={i} className="col-md-2">
              <Card4
                imageSrc={e.imageSrc}
                title={e.title}
                price={e.price}
                date={e.date}
                day={e.day}
                button={e.button}
                star={e.star}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product4;
