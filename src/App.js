import React from "react";
import ShowcaseImage from "./components/files/showcase.jpeg";
import Header from "./components/header/Header";
import Showcase from "./components/SearchBox/Combobox";
import Highlights from "./components/SearchBox/Combobox2";
import AutoGrid from "./components/Category Grid";
import {
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import { palette } from "@mui/system";

function App() {
  return (
    <div className="app">
      <Header />
      <Showcase />
      <Highlights />
      <img src={ShowcaseImage} alt="Logo" />
    </div>
  );
}
export default App;
