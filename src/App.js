import React from "react";
import "./index.css";
import ShowcaseImage from "./components/files/showcase.jpeg";
import Header from "./components/header/Header";
import Showcase from "./components/SearchBox/Combobox";
import Highlights from "./components/SearchBox/Combobox2";

function App() {
  return (
    <div className="app">
      <Header />
      <Showcase />
      <Highlights />
      <img src={ShowcaseImage} alt="Logo" className="imgMain" />
    </div>
  );
}
export default App;
