// IMPORTS ACROSS CLASS COMPONENTS

import React, { Component } from "react";
import Game from "./Game";
// import Board from './Board';
// import Square from './Square';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
