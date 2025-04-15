import "./App.css";
//web hooks
import { useState, useEffect } from "react";
import { Header } from "./components/Header";

function App() {
  //const name = <h1>steven</h1>;

  // how to use use state :
  // the name of the variable 1
  // the name of the function to change the variable

  // [ variable, func] = default value
  const [title, setTitle] = useState([]);

  setTimeout(() => {
    let arr = ["Steven", "Jerry", "Nikki", "Holly"];
    const random = Math.floor(Math.random() * arr.length + 1);
    console.log(random);
    setTitle(arr[random]);
  }, 100000);

  return (
    <>
      <Header name={"Cristine"} names={["Steven", "Nikki", "Les"]} />
    </>
  );
}

export default App;
