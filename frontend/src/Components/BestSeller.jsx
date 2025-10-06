import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./productItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [best, setBest] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBest(bestProduct.slice(0, 5));
  }, []);
  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            excepturi dolores, voluptatum repellat fuga aliquid.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {best.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
