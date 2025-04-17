import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-white bg-slate-700 mt-4 fixed-bottom">
        <div className="text-center p-3">
          © 2023 Weather Condition App
          <a className="text-white" href="">
            Weather App
          </a>
        </div>
      </footer>
    </div>
  );
}
