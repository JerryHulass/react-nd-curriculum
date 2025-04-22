import React from "react";
import { useEffect, useState } from "react";

export default function About({ info }) {
  const [name, setName] = useState("");
  const [dis, setDis] = useState("");
  console.log(" You are logging out INFO from the about page.", info);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("http://localhost:8080/about");
        const response = await data.json();
        //console.log("This is my Response Data", response);
        setName(response.name);
        setDis(response.discription);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <p>{dis}</p>
    </div>
  );
}
