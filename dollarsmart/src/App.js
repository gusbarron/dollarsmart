import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to my super store!</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
 
  );
}

export default App;
