import React from "react";

export default function Navbar() {
  const navbar_items = ["Home", "Blog", "About", "Setting", "Contact"];

  return (
    <nav
      className="col-12"
      style={{
        color: "white",
        maxWidth: "10%",
        zIndex: "1",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {navbar_items.map((item, index) => {
          return (
            <li key={index} style={{ padding: "10px" }}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
