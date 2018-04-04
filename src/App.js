import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Content from "./Components/Content";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Content />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
