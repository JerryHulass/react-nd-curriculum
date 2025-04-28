import React from "react";

export default function Link(props) {
  const { to } = props;

  return <a href={to}>{props.name}</a>;
}
