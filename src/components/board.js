import React, {Component} from "react";
import Square from "./square";
import {SimpleGrid} from '@chakra-ui/react'
import intToRoman from '../logic/intToRoman'
import romanToInt from '../logic/romanToInt'
import Notification from "./toastNotification";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(0).map((_, index) => intToRoman(index + 1)),
      indexes: [],
      isOver: false
    }

  }

  handleClick(i) {
    if (this.state.isOver) {
      console.log('isOver');
      return;
    }

    let indexes = this.state.indexes.slice();
    indexes.push(i);

    if (indexes.length === 2) {
      if (indexes[0] !== indexes[1]) {
        const squares = this.state.squares.slice();
        swap(squares, indexes);

        if (checkGame(squares))
          this.setState({isOver: true});

        this.setState({squares: squares});
      }

      indexes = [];
    }

    this.setState({indexes: indexes});
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <>
        <SimpleGrid columns={3} spacing={3}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </SimpleGrid>
        {this.state.isOver && <Notification title='Puzzle resuelto' description='Magic Square 15 resuelto pasa al siguiene puzzle'/>}
      </>
    );
  }
}

const swap = (squares, indexes) => {
  let temp = squares[indexes[0]];
  squares[indexes[0]] = squares[indexes[1]];
  squares[indexes[1]] = temp;
};

const checkGame = (squares) => {
  return (checkRows(squares) && checkColumns(squares) && checkDiagonal(squares));
};

const checkRows = (squares) => {
  return (
    romanToInt(squares[0]) + romanToInt(squares[1]) + romanToInt(squares[2]) === 15 &&
    romanToInt(squares[3]) + romanToInt(squares[4]) + romanToInt(squares[5]) === 15 &&
    romanToInt(squares[6]) + romanToInt(squares[7]) + romanToInt(squares[8]) === 15
  );
};

const checkColumns = (squares) => {
  return (
    romanToInt(squares[0]) + romanToInt(squares[3]) + romanToInt(squares[6]) === 15 &&
    romanToInt(squares[1]) + romanToInt(squares[4]) + romanToInt(squares[7]) === 15 &&
    romanToInt(squares[2]) + romanToInt(squares[5]) + romanToInt(squares[8]) === 15
  );
};

const checkDiagonal = (squares) => {
  return (
    romanToInt(squares[0]) + romanToInt(squares[4]) + romanToInt(squares[8]) === 15
  );
};

export default Board;
