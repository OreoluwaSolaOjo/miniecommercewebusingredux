import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productid" exact element={<ProductDetails />} />
          <Route path="*"  > 404 not found</Route>
        </Routes>


      </BrowserRouter>
    </div>

  );
}

export default App;
