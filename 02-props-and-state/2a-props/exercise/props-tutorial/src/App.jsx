import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("http://localhost:8080/help");
        const response = await data.json();
        console.log("This is my Response Data", response);
        return response.phrase;
      } catch (error) {
        console.error(error);
      }
    };

    const newPhrase = fetchdata();

    setPhrase(newPhrase);
  }, []);

  return (
    <>
      <h1>{phrase}</h1>
    </>
  );
}

export default App;
