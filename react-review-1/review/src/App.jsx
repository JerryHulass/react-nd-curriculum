import "./App.css";
import { useState, useEffect } from "react";
import { About, Navbar, Routes, Form, AllPokemon } from "./components";
import data from "../src/data/pokemonData";
/**
 - useEffect 

 - useState 


 are the two most common hooks you will use. 

 useState (1) - is one of our most basic and power way to manage and handle state. 


 useEffect (2) - is used to trigger functionality in our application. 
 that could be to fetch data from a API or making our appication react to different c
 hanges based off of state being changed by the Client (User)


 useReducer - handles more complicated piece of state. So more robust data structures. [{}, {}, {data:[{},{}]}] 


 */

function App() {
  // data  && the function to manipulate the data
  const [user, setUser] = useState({
    name: "Steven",
    email: "steven123@yahoo.com",
    username: "steven123",
    _id: 2,
    data: data,
  }); // store Data in the frontend

  /**
   State is used to render information to the user. 
   its also used for authentication ( JWT ) Token 
   Statemanagement is very important because Data can take many forms and 
   organizing it using some tools ( contextAPI, Redux toolkit)  makes working with state Easier.

   We can pass props (data from one component to the next ) but we can't pass up data from child components 
      */

  useEffect(() => {
    async function fetchData() {
      try {
        //create a use effect and fetch the data
        const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
        const data = await pokemon.json();
        console.log(data, "Output");
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const h1Title = (name) => <h1>{name}</h1>;

  console.log(user);
  return (
    <>
      {/* <About data={user} setUser={setUser} title={h1Title} /> */}
      <Navbar />
      <AllPokemon data={user.data} />
      <Form IsLoggedIn={false} />
      <Routes />
    </>
  ); // react fragment
}

export default App;
