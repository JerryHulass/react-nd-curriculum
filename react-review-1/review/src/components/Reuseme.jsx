import React from "react";

export default function Reuseme({ option, data }) {
  return (
    <form onSubmit={() => {}}>
      <label> {data.username} :</label>
      <input type="text" placeholder=" Input Username ?"></input>
      <button type="submit">{option ? "Sign Up" : " Login "}</button>
    </form>
  );
}
