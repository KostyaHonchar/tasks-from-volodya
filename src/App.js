import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Showcase from "./components/SearchBox/Combobox";
import Highlights from "./components/SearchBox/Combobox2";
import CategoryGrid from "./components/Category Grid";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="searchbox">
        <Showcase className="showcase" />
        <Highlights className="highlights" />
      </div>
      <div className="text-middle">
        <h1>Каталог весільних послуг</h1>
        <h4>12013 професіоналів із 24 міст України.</h4>
        <h4>Плануйте весілля разом з нами.</h4>
      </div>
      <CategoryGrid />
    </div>
  );
}
export default App;
