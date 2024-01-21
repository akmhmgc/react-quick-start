import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  let board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    board.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }
  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyOrder, setHistoryOrder] = useState("asc"); // asc or desc
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 == 0;

  function handlePlay(nextSquares) {
    // 現在の番手以降の履歴を
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let innerHtml;
    if (currentMove == move) {
      innerHtml = <p>{"You are at move #" + move}</p>;
    } else if (move > 0) {
      innerHtml = (
        <button onClick={() => jumpTo(move)}>{"Go to move #" + move}</button>
      );
    } else {
      innerHtml = (
        <button onClick={() => jumpTo(move)}>{"Go to game start"}</button>
      );
    }
    return <li key={move}>{innerHtml}</li>;
  });

  if (historyOrder == "desc") {
    moves.reverse();
  }

  function historyOrderToggle() {
    setHistoryOrder(historyOrder == "asc" ? "desc" : "asc");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button type="button" onClick={historyOrderToggle}>
          toggle
        </button>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

let firstRender = true;
let count = 0;

export default function RenderFunctionComponent() {
  let initName;
  let setInitName;

  if (firstRender) {
    const [first, second] = useState("Rudi");
    initName = first;
    setInitName = second;
    count ++;
    if (count > 0) firstRender = false;
  }
  const [firstName, setFirstName] = useState(initName);
  const [lastName, setLastName] = useState("Yardley");

  console.log(lastName);

  return (
    <>
      <button onClick={() => setInitName("tarou")}>Fred</button>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </>
  );
}
