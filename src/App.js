import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">| Developed by Kunal Kumar |</div>
    </>
  );
}

export default App;
