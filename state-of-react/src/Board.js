import React, { Component } from 'react';
import Square from './Square';


class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() { 
        const status = 'Next Player: X';
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
          </div>
        );
    }
}
 
export default Board;