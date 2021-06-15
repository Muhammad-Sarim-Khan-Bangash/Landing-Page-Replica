import React, { useState } from "react";
import Card from "../Components/Card";

const Product = () => {
  const [product, setProduct] = useState([
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg",
      title: "Apple iPhone 12 pro max with Facetime",
      price: "AED 8.00",
      date: "Arrives",
      day: "Tomorrow Jun 15",
      button: "express",
      star: "4.5",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg",
      title: "Generic Series 5 Smart Watch With",
      price: "AED 4682.15",
      date: "Arrives",
      day: "Tomorrow, Jun 15",
      button: "express",
      star: "5.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg",
      title: "Sony PlayStation 5 Console (Disc Version)",
      price: "AED 3099.00",
      date: "Arrives",
      day: "Tomorrow, Jun 15",
      button: "express",
      star: "4.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg",
      title: "Apple AirPods With Cahrging Case White",
      price: "AED 38.75",
      date: "Arrives",
      day: "Tomorrow, Jun 15",
      button: "express",
      star: "6.0",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1606212269/N42587741A_1.jpg",
      title: "Sony PlayStation 5 Console (Disc Version)",
      price: "AED 479.00",
      date: "Arrives",
      day: "Tomorrow, Jun 15",
      button: "express",
      star: "4.5",
    },
    {
      imageSrc:
        "https://z.nooncdn.com/products/tr:n-t_240/v1607501134/N42914208A_3.jpg",
      title: "OnePlus Nord N10 Dual Sim Midnight Ice",
      price: "AED 3619.00",
      date: "Arrives",
      day: "Tomorrow, Jun 15",
      button: "express",
      star: "5.5",
    },
  ]);

  return (
    <>
      <h5 className="mt-4 mb-4 ml-3 font-weight-bold text-dark">
        Recommended for you
      </h5>
      <div className="row p-0 m-0">
        {product.map((e, i) => {
          return (
            <div key={i} className="col-md-2">
              <Card
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

export default Product;
