import React from "react";
import { Route, Routes as R } from "react-router-dom";
import About from "./About";

export default function Routes() {
  return (
    <>
      <R>
        <Route path="/about" element={<About />}></Route>
      </R>
    </>
  );
}
