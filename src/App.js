import React from "react";
import Adresse from "./Adresse";
import "./App.css";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="a">
      <FullName />
      <ProfilePhoto />

      <Adresse />
    </div>
  );
}

export default App;
