import "./App.css";
import { useState, useEffect } from "react";
import { About, Contact, Home } from "./components";
function App() {
  const [phrase, setPhrase] = useState("");

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const data = await fetch("http://localhost:8080/help");
  //       const response = await data.json();
  //       console.log("This is my Response Data", response);
  //       return response.phrase;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const newPhrase = fetchdata();

  //   setPhrase(newPhrase);
  // }, []);

  return (
    <>
      {/* PROP DRILLING AND RENDERING DATA */}
      <Home info={"data"} />
      <About info={"data"} />
      <Contact info={"data"} />
    </>
  );
}

export default App;

/*

 Add Styling to to HOME,ABOUT, and CONTACT 

 then I want you to pass PROPS from your App component
  to your children Component(s).



*/
