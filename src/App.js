import React from "react";
import "./App.css";
import ShowcaseImage from "./components/files/showcase.jpeg";
import Header from "./components/header/Header";
import Showcase from "./components/Combobox";
import Highlights from "./components/Combobox2";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Highlights />
      <img src={ShowcaseImage} alt="Logo" className="showcase-photo" />
    </div>
  );
}
export default App;
