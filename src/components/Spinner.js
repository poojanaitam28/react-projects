import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      {<span className="loader"></span>}
      <p className="text-blue-400 text-lg font-semibold">Loading...</p>
    </div>
  );
}

export default Spinner;
