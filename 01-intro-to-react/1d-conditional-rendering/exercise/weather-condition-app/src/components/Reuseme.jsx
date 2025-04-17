import React from "react";

export default function Reuseme({ name, text, img_link }) {
  return (
    <div className="card text-center m-2">
      <div className="card-body  w-50 h-50 bg-slate-700 text-white rounded-lg border-2">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <img className="card-img-top" src={img_link} alt="Cloud Cover" />
      </div>
    </div>
  );
}
