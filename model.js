const {
  updateView,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

const deepCopyBoardState = (boardState) => {
  return {
    board: boardState.board.map((row) => row.map((element) => element)),
    selectorPos: { x: boardState.selectorPos.x, y: boardState.selectorPos.y },
  };
};

const deepCompareBoardStates = (boardStateA, boardStateB) => {
  return (
    compareBoards(boardStateA.board, boardStateB.board) &&
    compareSelectorPositions(boardStateA.selectorPos, boardStateB.selectorPos)
  );
};

const compareBoards = (boardA, boardB) => {
  return boardA.flat().reduce((acc, element, index) => {
    return element == boardB.flat()[index] && acc;
  }, true);
};
const compareSelectorPositions = (positionA, positionB) => {
  return positionA.x == positionB.x && positionA.y == positionB.y;
};

const createNewBoardState = (board, selectorPos) => {
  return {
    board: board.map((row) => row.map((element) => element)),
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

let selectorTicInterval;
const boardStates = [clearBoardState()];

const handleResetRequest = () => {
  if (
    !deepCompareBoardStates(
      boardStates[boardStates.length - 1],
      clearBoardState()
    )
  ) {
    resetSelectorBlink();
    boardStates.push(clearBoardState());
  }

  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    getTopMessage(boardStates[boardStates.length - 1])
  );
};

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

const isGameOver = (boardState) => {
  return isDraw(boardState) || hasWinner(boardState);
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
  return boardState.board.flat().includes(letter)
    ? boardState.board.flat().filter((element) => element == letter).length
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
  return isEmptyAtSelectorLocation(boardState) && !isGameOver(boardState)
    ? createNewBoardState(
        alterBoardAtLocation(
          boardState.board,
          boardState.selectorPos.x,
          boardState.selectorPos.y,
          getTurn(boardState)
        ),
        boardState.selectorPos
      )
    : boardState;
};

const handlePlacementRequest = () => {
  const desiredBoardState = placeLetter(boardStates[boardStates.length - 1]);
  if (
    !deepCompareBoardStates(
      boardStates[boardStates.length - 1],
      desiredBoardState
    )
  ) {
    resetSelectorBlink();
    boardStates.push(desiredBoardState);
  }
  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    getTopMessage(boardStates[boardStates.length - 1])
  );
};

const handleMoveRequest = (request) => {
  const desiredBoardState = moveSelector(
    boardStates[boardStates.length - 1],
    request
  );
  if (
    !deepCompareBoardStates(
      boardStates[boardStates.length - 1],
      desiredBoardState
    )
  ) {
    boardStates.push(desiredBoardState);
    resetSelectorBlink();
  }
  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    getTopMessage(boardStates[boardStates.length - 1])
  );
};

// Model init function
const initializeModel = () => {
  resetSelectorBlink();
  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    getTopMessage(boardStates[boardStates.length - 1])
  );
};

// Reset the cursor style blinking of the selector location after a move or placement
const resetSelectorBlink = () => {
  clearInterval(selectorTicInterval);
  selectorTicInterval = setSelectorInterval();
  resetSelectorCharacter();
};

// Timer functions for the selector blinking speed
const selectorTic = () => {
  updateSelectorCharacterIndex();
  updateView(
    boardStates[boardStates.length - 1].board,
    boardStates[boardStates.length - 1].selectorPos,
    getTopMessage(boardStates[boardStates.length - 1])
  );
};
const setSelectorInterval = () => {
  return setInterval(selectorTic, 700);
};

module.exports = {
  initializeModel,
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
  placeLetter,
  handleMoveRequest,
  compareBoards,
  deepCompareBoardStates,
  handlePlacementRequest,
  handleResetRequest,
};
