import React from "react";

export default function Rain() {
  return (
    <div className="card text-center m-2">
      <div className="card-body w-50 h-50 bg-slate-700 text-white rounded-lg border-2">
        <h5 className="card-title">Rain</h5>
        <p className="card-text">It's raining today.</p>
        <img className="card-img-top" src="/Rain.jpg" alt="rain" />
      </div>
    </div>
  );
}
