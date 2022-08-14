// IMPORTS ACROSS CLASS COMPONENTS

import React, { Component } from "react";
// import Square from './Square';
// import Board from './Board';
// import Game from './Game';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
