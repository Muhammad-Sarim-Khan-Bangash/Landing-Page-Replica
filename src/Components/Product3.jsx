import React, { useState } from "react";
import Card3 from "../Components/Card3";

const Product3 = () => {
  const [product, setProduct] = useState([
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg",
      title: "Samsung 50-Inch 4K Samrt QLED TV",
      price: "AED 1999.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.3",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1603870447/N41442670A_1.jpg",
      title: "Oculus Quest 2 Advanced All-In-One",
      price: "AED 1418.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.8",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1618292510/N46487162A_1.jpg",
      title: "ASUS TUF DASH F15 FX516P Gaming Laptop",
      price: "AED 5069.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "5.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1537004783/N17076595A_1.jpg",
      title: "hp 27-Inches Full HD IPS Monitor White",
      price: "AED 799.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "5.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1615355292/N45047130A_1.jpg",
      title: "hp 14a-NA0020NR ChromeBook",
      price: "AED 1239.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.6",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N42284105A_1.jpg",
      title: "Apple Macbook Air 13-Inch Display",
      price: "AED 3569.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.7",
    },
  ]);
  return (
    <>
      <h5 className="mt-5 ml-4 font-weight-bold text-dark">Trending Deals</h5>
      <div className="row p-0 m-0">
        {product.map((e, i) => {
          return (
            <div key={i} className="col-md-2">
              <Card3
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

export default Product3;
