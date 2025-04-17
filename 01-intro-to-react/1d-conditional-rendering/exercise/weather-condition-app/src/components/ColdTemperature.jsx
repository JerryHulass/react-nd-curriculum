import React from "react";

export default function ColdTemperature() {
  return (
    <div className="card text-center m-2">
      <div className="card-body  w-50 h-50 bg-slate-700 text-white rounded-lg border-2">
        <h5 className="card-title">Cold Temperature</h5>
        <p className="card-text text-sm">
          It's cold today with a temperature below 60°F.
        </p>
        <img className="card-img-top" src="/Cold.jpg" alt="cold" />
      </div>
    </div>
  );
}
