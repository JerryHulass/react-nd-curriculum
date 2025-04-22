import React from "react";
import { useEffect, useState } from "react";
import Products from "./Products";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("http://localhost:8080/");
        const response = await data.json();
        console.log("This is my Response Data", response);
        return response.phrase;
      } catch (error) {
        console.error(error);
      }
    };

    const newPhrase = fetchdata();

    setData(newPhrase);
  }, []);
  return (
    <>
      <div>{data}</div>
      <Products />
    </>
  );
}
