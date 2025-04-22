import React from "react";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <img src={item.img} />
          </div>
        );
      })}
    </div>
  );
}
