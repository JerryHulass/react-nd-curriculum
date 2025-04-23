import "./App.css";
import { useState } from "react";
import { About, Contact, Home, Navbar, Register, Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      {/* PROP DRILLING AND RENDERING DATA */}
      <Navbar />
      {/* Turanry thats going to say either Register or Login if we have a token */}
      <Register user={user} setUser={setUser} />
      {/* <Home info={"data"} />
      <About info={"data"} />
      <Contact info={"data"} /> */}

      {/* ROUTES FRONTEND ROUTES */}
      <Routes>
        {/* Home Component */}
        <Route path="/" element={<Home />} />
        {/* About Component */}
        <Route path="/about" element={<About />} />
        {/* Contact Component */}
        <Route path="/contact" element={<Contact />} />
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
