import "./App.css";
import { useState, useEffect } from "react";
import { About, Contact, Home, Navbar, Register, Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  return (
    <>
      {/* PROP DRILLING AND RENDERING DATA */}
      <Navbar />
      {/* Turanry thats going to say either Register or Login if we have a token */}
      {isLoggedin ? null : <Login setIsLoggedIn={setIsLoggedIn} />}
      {/* <Register user={user} setUser={setUser} /> */}

      {/* ROUTES FRONTEND ROUTES */}
      <Routes>
        {/* Home Component */}
        <Route path="/" element={<Home />} />
        {/* About Component */}
        <Route path="/about" element={<About />} />
        {/* Contact Component */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

/*

 Add Styling to to HOME,ABOUT, and CONTACT 

 then I want you to pass PROPS from your App component
  to your children Component(s).



*/
