import React from "react";

export default function CloudCover() {
  return (
    <div className="card text-center m-2">
      <div className="card-body  w-50 h-50 bg-slate-700 text-white rounded-lg border-2">
        <h5 className="card-title">Cloud Cover</h5>
        <p className="card-text">It's cloudy today.</p>
        <img className="card-img-top" src="/cloudy.jpg" alt="Cloud Cover" />
      </div>
    </div>
  );
}
