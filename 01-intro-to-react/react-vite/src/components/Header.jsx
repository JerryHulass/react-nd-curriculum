import { useState } from "react";

export const Header = (props) => {
  console.log(props);
  return (
    <>
      <header>
        <h1>Welcome {props.name} user !</h1>
        <ul>
          {props.names.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </header>
    </>
  );
};
