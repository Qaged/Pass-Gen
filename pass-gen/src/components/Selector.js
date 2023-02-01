import React from "react";

function Selector(props) {
  return (
    <div className="selector">
      <input className="check-input" type="checkbox" value="upper" /> UPPER
      <input className="check-input" type="checkbox" value="lower" /> lower
      <input className="check-input" type="checkbox" value="special" /> Special
      <input
        className="text-input"
        type="number"
        placeholder="Length..."
      />{" "}
    </div>
  );
}

export default Selector;
