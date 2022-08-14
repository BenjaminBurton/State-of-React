// IMPORTS ACROSS CLASS COMPONENTS

import React, { Component } from "react";
import Square from "./Square";
// import Board from './Board';
// import Game from './Game';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square />
      </div>
    );
  }
}

export default App;
