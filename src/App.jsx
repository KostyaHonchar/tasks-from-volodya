import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import CategoryGrid from "./components/Category Grid";
import SearchBox from "./components/SearchBox";
import TextMiddle from "./components/Text-middle";
import Clearfix from "./components/Clearfix";


export default function App() {
  return (
    <div className="app">
      <Header />
      <SearchBox />
      <TextMiddle />
      <CategoryGrid />
      <Clearfix />
    </div>
  );
}