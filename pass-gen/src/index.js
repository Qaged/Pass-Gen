import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Components
import Selector from "./components/Selector";
import GenerateBtn from "./components/GenerateBtn";
import Password from "./components/Password";

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
