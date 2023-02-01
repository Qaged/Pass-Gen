import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Components
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
function GenerateBtn(props) {
  return (
    <div className="generate">
      <button className="generate-btn">Generate</button>
    </div>
  );
}
function Password(props) {
  return (
    <div className="password">
      <p id="password-tag">Password: </p>
      <p id="password">oaitzu7-akdio3-asdkfjh9</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Selector />
      <GenerateBtn />
      <Password />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
