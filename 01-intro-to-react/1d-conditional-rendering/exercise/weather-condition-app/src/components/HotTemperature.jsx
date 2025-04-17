import React from "react";

export default function HotTemperature() {
  return (
    <div className="card text-center m-2">
      <div className="card-body  w-50 h-50 bg-slate-700 text-white rounded-lg border-2">
        <h5 className="card-title">Hot Temperature</h5>
        <p className="card-text">
          It's hot today with a temperature above 60°F.
        </p>
        <img className="card-img-top" src="/Sun.webp" alt="Sun" />
      </div>
    </div>
  );
}
