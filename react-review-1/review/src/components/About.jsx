import React from "react";

export default function About(props) {
  const { data, setUser, title } = props;

  const onChange = () => {
    setUser((predata) => {
      return {
        ...predata,
        ["name"]: "Aziz",
      };
    });
  };
  return (
    <div>
      {title(data.name)}
      <h2>{data.email}</h2>
      <h2>{data.username}</h2>
      <button onClick={onChange}> Change Name </button>
    </div>
  );
}
