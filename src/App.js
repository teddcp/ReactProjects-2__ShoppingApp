import React, { Component } from "react";
import HomepageComponent from "./pages/homepage/homepageComponent";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageComponent />
      </div>
    );
  }
}
