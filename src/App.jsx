import React from "react";
import Header from "./layouts/header/Header";
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
