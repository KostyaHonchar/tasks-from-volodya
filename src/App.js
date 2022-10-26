import React from "react";
import "./App.css";
import ShowcaseImage from "./components/files/showcase.jpeg";
import Header from "./components/header/Header";
import Showcase from "./components/Combobox";
import Highlights from "./components/Combobox2";
import AutoGrid from "./components/Category Grid";
import { Container, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <Showcase />
        <Highlights sx={{ boxShadow: 1 }} />
        <img
          src={ShowcaseImage}
          alt="Logo"
          className="showcase-photo"
          sx={{ zIndex: "modal" }}
        ></img>
      </Container>
      <Typography
        sx={{
          color: "#4f5259;",
          display: "inline",
          fontWeight: "bold",
          my: 100,
          fontSize: 40,
          textAlign: "center",
        }}
      >
        <h1>Каталог весільних послуг</h1>
        <h4>12011 професіоналів із 24 міст України.</h4>
        <h4> Плануйте весілля разом з нами.</h4>
      </Typography>
      <AutoGrid />
    </div>
  );
}
export default App;
