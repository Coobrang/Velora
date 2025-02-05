import React from "react";
import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

const App = () => {
  return (
    <div className="container">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default App;