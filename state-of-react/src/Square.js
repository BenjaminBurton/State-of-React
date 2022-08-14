// IMPORTS ACROSS CLASS COMPONENTS

import React, { Component } from "react";
// import Square from './Square';
// import Board from './Board';
// import Game from './Game';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

// ANOTHER VERSION OF THE FUNCTION 
// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

export default Square;
