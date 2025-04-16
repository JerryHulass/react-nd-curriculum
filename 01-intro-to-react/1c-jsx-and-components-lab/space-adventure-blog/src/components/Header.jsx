import React from "react";

export default function Header() {
  // set my this image as a background image for my header

  const header_Styling = {
    backgroundImage: "url('/solar-system.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
    maxHeight: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <header className="col-12" style={header_Styling}>
      <h1>Space Adventure Blog</h1>
    </header>
  );
}
