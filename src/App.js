import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about"
import Cart from "./components/cart";
import Admin from "./components/admin";
import React from "react";
import backgroundImg from "./candy.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
