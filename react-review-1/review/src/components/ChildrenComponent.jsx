import React from "react";

export default function ChildrenComponent({ pokemon }) {
  const getTypeColors = (typeString) => {
    const typeColors = {
      Fire: "red",
      Water: "blue",
      Grass: "green",
      Electric: "yellow",
      Psychic: "purple",
      Ice: "cyan",
      Dragon: "orange",
      Dark: "black",
      Fairy: "pink",
      Normal: "gray",
      Fighting: "brown",
      Flying: "skyblue",
      Poison: "violet",
      Ground: "sandybrown",
      Rock: "darkgray",
      Bug: "limegreen",
      Ghost: "indigo",
      Steel: "silver",
    };

    const types = typeString.split("/");
    return types.map((type) => typeColors[type] || "white");
  };

  const [primaryColor, secondaryColor] = getTypeColors(pokemon.type);

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "8px",
    overflow: "hidden",
    width: "200px",
    height: "300px",
    color: "white",
    background: secondaryColor
      ? `linear-gradient(to right, ${primaryColor} 50%, ${secondaryColor} 50%)`
      : primaryColor,
  };

  return (
    <div style={cardStyle}>
      <h1>{pokemon.name}</h1>
      <h6>{pokemon.type}</h6>
      <p>{pokemon.id}</p>
    </div>
  );
}
