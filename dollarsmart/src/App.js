import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import React from "react";
import backgroundImg from "./candy.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar></Navbar>
      <h1>Dollar Smart</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
