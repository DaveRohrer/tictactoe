const {
  updateView,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

//board state

//TODO: change code to use double map now that you learned it
const deepCopyBoardState = (boardState) => {
  return {
    board: [
      [boardState.board[0][0], boardState.board[0][1], boardState.board[0][2]],
      [boardState.board[1][0], boardState.board[1][1], boardState.board[1][2]],
      [boardState.board[2][0], boardState.board[2][1], boardState.board[2][2]],
    ],
    selectorPos: { x: boardState.selectorPos.x, y: boardState.selectorPos.y },
  };
};

//TODO: change code to use double map now that you learned it
const createNewBoardState = (board, selectorPos) => {
  return {
    board: [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
    ],
    selectorPos: { x: selectorPos.x, y: selectorPos.y },
  };
};

const alterBoardAtLocation = (board, x, y, value) => {
  return board.map((row, iIndex) => {
    return row.map((element, jIndex) => {
      return iIndex == y && jIndex == x ? value : element;
    });
  });
};

const clearBoardState = () => {
  return {
    board: [
      ["blank", "blank", "blank"],
      ["blank", "blank", "blank"],
      ["blank", "blank", "blank"],
    ],
    selectorPos: { x: 0, y: 0 },
  };
};

const boardStates = [clearBoardState()];

const getWinnerFromRows = (rowArray) => {
  return rowArray.reduce((acc, row) => {
    return row.every((element) => element == "x")
      ? "x"
      : row.every((element) => element == "o")
      ? "o"
      : acc;
  }, "none");
};

const getHorizontalWinner = (boardState) => {
  return getWinnerFromRows(boardState.board);
};

const getVerticalWinner = (boardState) => {
  return getWinnerFromRows(transformColumnsToRows(boardState.board));
};

const getDiagonalWinner = (boardState) => {
  return getWinnerFromRows(transformDiagnalIndiciesToRows(boardState.board));
};

const getWinner = (boardState) => {
  return [
    getHorizontalWinner(boardState),
    getVerticalWinner(boardState),
    getDiagonalWinner(boardState),
  ].reduce((acc, element) => {
    return element != "none" ? element : acc;
  }, "none");
};

const isDraw = (boardState) => {
  return !hasEmptySpaces(boardState) && !hasWinner(boardState);
};

const hasWinner = (boardState) => {
  return getWinner(boardState) != "none";
};

const transformColumnsToRows = (board) => {
  return [
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
  ];
};

const transformDiagnalIndiciesToRows = (board) => {
  return [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
};

const getTopMessage = (boardState) => {
  return hasWinner(boardState)
    ? `Player ${getWinner(boardState).toUpperCase()} Wins!`
    : isDraw(boardState)
    ? `Draw Game!`
    : `Player ${getTurn(boardState).toUpperCase()}'s Turn`;
};

const getNumberOfLetters = (boardState, letter) => {
  return boardState.board.flat(2).includes(letter)
    ? boardState.board.flat(2).filter((element) => element == letter).length
    : 0;
};

const getTurn = (boardState) => {
  return getNumberOfLetters(boardState, "o") <
    getNumberOfLetters(boardState, "x")
    ? "o"
    : "x";
};

const hasEmptySpaces = (boardState) => {
  return getNumberOfLetters(boardState, "blank") > 0;
};

const moveSelectorRight = (boardState) => {
  return boardState.selectorPos.x < 2
    ? createNewBoardState(boardState.board, {
        x: boardState.selectorPos.x + 1,
        y: boardState.selectorPos.y,
      })
    : boardState;
};
const moveSelectorLeft = (boardState) => {
  return boardState.selectorPos.x > 0
    ? createNewBoardState(boardState.board, {
        x: boardState.selectorPos.x - 1,
        y: boardState.selectorPos.y,
      })
    : boardState;
};
const moveSelectorUp = (boardState) => {
  return boardState.selectorPos.y > 0
    ? createNewBoardState(boardState.board, {
        x: boardState.selectorPos.x,
        y: boardState.selectorPos.y - 1,
      })
    : boardState;
};
const moveSelectorDown = (boardState) => {
  return boardState.selectorPos.y < 2
    ? createNewBoardState(boardState.board, {
        x: boardState.selectorPos.x,
        y: boardState.selectorPos.y + 1,
      })
    : boardState;
};

const moveSelector = (boardState, direction) => {
  switch (direction) {
    case "right":
      return moveSelectorRight(boardState);
    case "left":
      return moveSelectorLeft(boardState);
    case "up":
      return moveSelectorUp(boardState);
    case "down":
      return moveSelectorDown(boardState);
    default:
      break;
  }
};

const isEmptyAtSelectorLocation = (boardState) => {
  return (
    boardState.board[boardState.selectorPos.y][boardState.selectorPos.x] ==
    "blank"
  );
};

const placeLetter = (boardState) => {
  //check to see if location at selector position is free annd then put the correct letter down
  // return isEmptyAtSelectorLocation(boardState) ?  :   ;
};

// const board = [
//   ["x", "o", "x"],
//   ["x", "o", "o"],
//   ["o", "x", "x"],
// ];
// const boardResult = [
//   ["x", "o", "x"],
//   ["x", "o", "o"],
//   ["o", "x", "o"],
// ];

// console.log(alterBoardAtLocation(board, 2, 2, "o"));

// const boardState = {
//   board: [
//     ["blank", "x", "blank"],
//     ["x", "x", "blank"],
//     ["o", "o", "o"],
//   ],
// };
// console.log(getWinner(boardState));

//functions
//isWinner()
//deepCopyBoardState()
//getTopMessage
//newBoardState

//
//

/*
create new board state (

  const 

 )

*/

// const {
//   updateView,
//   updateSelectorCharacterIndex,
//   resetSelectorCharacter,
// } = require("./view");

// // Model variables
// let boardState = [];
// let selectorPosition = {};
// let selectorTicTimeout;
// let playersTurn;

// const boardState = {
//   board: [
//     ["x", "o", "x"],
//     ["x", "o", "o"],
//     ["o", "x", "x"],
//   ],
//   selectorPos: { x: 0, y: 0 },
// };

// console.log(moveSelector(boardState, "down"));

// Model init function
const initializeModel = (presentToView = true) => {
  // resetBoardState();
  // resetSelectorPosition();
  // selectorTicTimeout = setSelectorInterval();
  // playersTurn = "X";
  // if (presentToView) {
  //   updateView(boardState, selectorPosition, topMessage(playersTurn));
  // }
  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    "lets party for real"
  );
};

// // Resetting methods
// const resetModel = () => {
//   resetBoardState();
//   resetSelectorPosition();
//   resetSelectorBlink();
//   playersTurn = "X";
//   updateView(boardState, selectorPosition, topMessage(playersTurn));
// };
// const resetSelectorPosition = () => {
//   selectorPosition.x = 0;
//   selectorPosition.y = 0;
// };
// const resetBoardState = () => {
//   boardState = [
//     ["blank", "blank", "blank"],
//     ["blank", "blank", "blank"],
//     ["blank", "blank", "blank"],
//   ];
// };
// const resetSelectorBlink = () => {
//   clearInterval(selectorTicTimeout);
//   selectorTicTimeout = setSelectorInterval();
//   resetSelectorCharacter();
// };

// // Timer functions for the selector blinking speed
// const selectorTic = () => {
//   updateSelectorCharacterIndex();
//   updateView(boardState, selectorPosition, topMessage(playersTurn));
// };
// const setSelectorInterval = () => {
//   return setInterval(selectorTic, 700);
// };

//   resetSelectorBlink();
//   updateView(boardState, selectorPosition, topMessage(playersTurn));
// };
// const placeLetter = (presentToView = true) => {
//   if (
//     boardState[selectorPosition.y][selectorPosition.x] === "blank" &&
//     checkForWinner() === "no winner yet"
//   ) {
//     boardState[selectorPosition.y][
//       selectorPosition.x
//     ] = playersTurn.toLowerCase();
//     flipTurn();
//   }
//   if (presentToView) {
//     updateView(boardState, selectorPosition, topMessage(playersTurn));
//   }
// };

module.exports = {
  initializeModel,
  //   placeLetter,
  //   resetModel,
  getHorizontalWinner,
  getVerticalWinner,
  getDiagonalWinner,
  getWinner,
  getTurn,
  hasEmptySpaces,
  isDraw,
  getTopMessage,
  moveSelector,
  deepCopyBoardState,
  createNewBoardState,
  alterBoardAtLocation,
  isEmptyAtSelectorLocation,
  //   // I put the functions I am exporting for testing under this comment until I learn more
  //   // about how to properly handle encapsulation when doing jest testing.
  //   setBoard,
  //   checkForWinner,
  //   getBoardState,
  //   setSelectorPosition,
  //   placeLetter,
};
