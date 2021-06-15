import React, { useState } from "react";
import Card2 from "../Components/Card2";

const Product2 = () => {
  const [product, setProduct] = useState([
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1588074710/N31981756A_1.jpg",
      title: "noon east 15-Bar Coffe Machine CM-8",
      price: "AED 175.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.5",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1537701283/N18021297A_1.jpg",
      title: "Deals for Less Rombs Three Seater Sofa",
      price: "AED 65.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "5.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1607281528/N28431698A_1.jpg",
      title: "noon east Garment Streamer, 1.3 L",
      price: "AED 75.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.5",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1605871672/N39781651A_1.jpg",
      title: "Bakhoor B50 Car USB Type-C Power Recharger",
      price: "AED 82.20",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "3.2",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1586152362/N26505142A_1.jpg",
      title: "noon east Granite/Marble Coater",
      price: "AED 165.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "4.6",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1605815098/N30157261A_1.jpg",
      title: "Breville Barista Pro Expresso Machine",
      price: "AED 2790.00",
      date: "Arrives",
      day: "Wed, Jun 16",
      button: "express",
      star: "5.0",
    },
  ]);
  return (
    <>
      <h5 className="mt-5 mb-4 ml-3 font-weight-bold text-dark">
        Top picks in home & kitchen
      </h5>
      <div className="row p-0 m-0">
        {product.map((e, i) => {
          return (
            <div key={i} className="col-md-2">
              <Card2
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

export default Product2;
