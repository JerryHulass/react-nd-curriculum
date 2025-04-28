import React from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function AllPokemon({ data }) {
  console.log(data, " Data");
  return (
    <div>
      {data.map((pokemon, index) => {
        return <ChildrenComponent key={index} pokemon={pokemon} />;
      })}
    </div>
  );
}
