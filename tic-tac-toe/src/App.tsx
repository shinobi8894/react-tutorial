import React, { useState } from 'react';
import './App.css';

type SquareValue = 'X' | 'O' | null;

function App() {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number): void => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(board)) return;
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = (): void => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (index: number) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default App;
