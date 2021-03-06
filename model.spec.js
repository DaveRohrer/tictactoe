const {
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
} = require("./model");

describe("getHorizontalWinner", () => {
  it("returns 'none' when the board is blank", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("none");
  });
  it("returns 'none' when the board is has two x and two o placements", () => {
    const boardState = {
      board: [
        ["x", "x", "blank"],
        ["blank", "blank", "blank"],
        ["o", "o", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("none");
  });
  it("returns 'x' when there are 3 xs in the top row", () => {
    const boardState = {
      board: [
        ["x", "x", "x"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("x");
  });
  it("returns 'x' when there are 3 xs in the middle row", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["x", "x", "x"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("x");
  });
  it("returns 'x' when there are 3 xs in the bottom row", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["x", "x", "x"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("x");
  });
  it("returns 'o' when there are 3 os in the top row", () => {
    const boardState = {
      board: [
        ["o", "o", "o"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when there are 3 os in the middle row", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["o", "o", "o"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when there are 3 xs in the bottom row", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["o", "o", "o"],
      ],
    };
    expect(getHorizontalWinner(boardState)).toEqual("o");
  });
});
describe("getVerticalWinner", () => {
  it("returns 'none' when the board is blank", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("none");
  });
  it("returns 'none' when the board is has two x and two o placements", () => {
    const boardState = {
      board: [
        ["x", "o", "blank"],
        ["x", "blank", "blank"],
        ["o", "o", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("none");
  });
  it("returns 'x' when there are 3 xs in the first column", () => {
    const boardState = {
      board: [
        ["x", "blank", "blank"],
        ["x", "blank", "blank"],
        ["x", "blank", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("x");
  });
  it("returns 'x' when there are 3 xs in the secocnd column", () => {
    const boardState = {
      board: [
        ["blank", "x", "blank"],
        ["blank", "x", "blank"],
        ["blank", "x", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("x");
  });
  it("returns 'x' when there are 3 xs in the third column", () => {
    const boardState = {
      board: [
        ["blank", "blank", "x"],
        ["blank", "blank", "x"],
        ["blank", "blank", "x"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("x");
  });
  it("returns 'o' when there are 3 os in the first column", () => {
    const boardState = {
      board: [
        ["o", "blank", "blank"],
        ["o", "blank", "blank"],
        ["o", "blank", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when there are 3 os in the secocnd column", () => {
    const boardState = {
      board: [
        ["blank", "o", "blank"],
        ["blank", "o", "blank"],
        ["blank", "o", "blank"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when there are 3 os in the third column", () => {
    const boardState = {
      board: [
        ["blank", "blank", "o"],
        ["blank", "blank", "o"],
        ["blank", "blank", "o"],
      ],
    };
    expect(getVerticalWinner(boardState)).toEqual("o");
  });
});
describe("getDiagonalWinner", () => {
  it("returns 'x' when there are 3 xs in a row from top left to bottom right", () => {
    const boardState = {
      board: [
        ["x", "blank", "blank"],
        ["blank", "x", "blank"],
        ["blank", "blank", "x"],
      ],
    };
    expect(getDiagonalWinner(boardState)).toEqual("x");
  });
  it("returns 'x' when there are 3 xs in a row from top right to bottom left", () => {
    const boardState = {
      board: [
        ["blank", "blank", "x"],
        ["blank", "x", "blank"],
        ["x", "blank", "blank"],
      ],
    };
    expect(getDiagonalWinner(boardState)).toEqual("x");
  });
  it("returns 'o' when there are 3 os in a row from top left to bottom right", () => {
    const boardState = {
      board: [
        ["o", "blank", "blank"],
        ["blank", "o", "blank"],
        ["blank", "blank", "o"],
      ],
    };
    expect(getDiagonalWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when there are 3 os in a row from top right to bottom left", () => {
    const boardState = {
      board: [
        ["blank", "blank", "o"],
        ["blank", "o", "blank"],
        ["o", "blank", "blank"],
      ],
    };
    expect(getDiagonalWinner(boardState)).toEqual("o");
  });
});
describe("getWinner", () => {
  it("returns 'x' when the board is full and there are 3 xs in a row from top left to bottom right", () => {
    const boardState = {
      board: [
        ["x", "o", "o"],
        ["x", "x", "o"],
        ["o", "x", "x"],
      ],
    };
    expect(getWinner(boardState)).toEqual("x");
  });
  it("returns 'o' when the board is not full and there are 3 os in a row from top right to bottom left", () => {
    const boardState = {
      board: [
        ["blank", "x", "o"],
        ["x", "o", "blank"],
        ["o", "x", "x"],
      ],
    };
    expect(getWinner(boardState)).toEqual("o");
  });
  it("returns 'o' when the board  not full and there are 3 os in a horizontal row", () => {
    const boardState = {
      board: [
        ["blank", "x", "blank"],
        ["x", "x", "blank"],
        ["o", "o", "o"],
      ],
    };
    expect(getWinner(boardState)).toEqual("o");
  });
  it("returns 'x' when the board  is full and there are 3 xs in a column", () => {
    const boardState = {
      board: [
        ["x", "x", "blank"],
        ["x", "o", "blank"],
        ["x", "o", "o"],
      ],
    };
    expect(getWinner(boardState)).toEqual("x");
  });
});
describe("getTurn", () => {
  it("returns 'x' when the board is empty", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getTurn(boardState)).toEqual("x");
  });
  it("returns 'o' when there is one x on the board", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "x", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getTurn(boardState)).toEqual("o");
  });
  it("returns 'x' when there is one x and one o on the board", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "x", "o"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(getTurn(boardState)).toEqual("x");
  });
  it("returns 'o' when there is one more x than o on the board", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "x", "o"],
        ["o", "x", "o"],
      ],
    };
    expect(getTurn(boardState)).toEqual("o");
  });
});
describe("hasEmptySpaces", () => {
  it("returns true when the board is empty", () => {
    const boardState = {
      board: [
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
        ["blank", "blank", "blank"],
      ],
    };
    expect(hasEmptySpaces(boardState)).toEqual(true);
  });
  it("returns true when the board is nearly full", () => {
    const boardState = {
      board: [
        ["x", "x", "o"],
        ["o", "x", "blank"],
        ["x", "o", "o"],
      ],
    };
    expect(hasEmptySpaces(boardState)).toEqual(true);
  });
  it("returns false when the board is full", () => {
    const boardState = {
      board: [
        ["x", "x", "o"],
        ["o", "x", "x"],
        ["x", "o", "o"],
      ],
    };
    expect(hasEmptySpaces(boardState)).toEqual(false);
  });
});
describe("isDraw", () => {
  it("returns false when there are empty spaces left with no winner", () => {
    const boardState = {
      board: [
        ["x", "blank", "x"],
        ["blank", "o", "blank"],
        ["blank", "o", "blank"],
      ],
    };
    expect(isDraw(boardState)).toEqual(false);
  });
  it("returns true when there are no empty spaces left with no winner", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
    };
    expect(isDraw(boardState)).toEqual(true);
  });
  it("returns false when there are no empty spaces left with a winner", () => {
    const boardState = {
      board: [
        ["x", "x", "x"],
        ["x", "o", "o"],
        ["o", "o", "x"],
      ],
    };
    expect(isDraw(boardState)).toEqual(false);
  });
});
describe("getTopMessage", () => {
  it("returns Draw Game! when the game is a draw", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
    };
    expect(getTopMessage(boardState)).toEqual("Draw Game!");
  });
  it("returns Player X's Turn when the game has no winner and has open spaces when it is x's turn", () => {
    const boardState = {
      board: [
        ["blank", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
    };
    expect(getTopMessage(boardState)).toEqual("Player X's Turn");
  });
  it("returns Player O's Turn when the game has no winner and has open spaces when it is x's turn", () => {
    const boardState = {
      board: [
        ["blank", "o", "x"],
        ["blank", "o", "blank"],
        ["blank", "x", "x"],
      ],
    };
    expect(getTopMessage(boardState)).toEqual("Player O's Turn");
  });
  it("returns Player O Wins! when the game player O wins", () => {
    const boardState = {
      board: [
        ["blank", "o", "x"],
        ["blank", "o", "blank"],
        ["x", "o", "x"],
      ],
    };
    expect(getTopMessage(boardState)).toEqual("Player O Wins!");
  });
});
describe("deepCopyBoardState", () => {
  it("copies a board without changing it after a new board was modified", () => {
    const originalBoardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    const copiedBoardState = deepCopyBoardState(originalBoardState);
    copiedBoardState.selectorPos.x = copiedBoardState.selectorPos.x + 1;
    expect(deepCopyBoardState(originalBoardState)).not.toEqual(
      copiedBoardState
    );
  });
});
describe("createNewBoardState", () => {
  it("creates a board with the given 2d board array and selector position object", () => {
    const originalBoardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    expect(
      createNewBoardState(
        originalBoardState.board,
        originalBoardState.selectorPos
      )
    ).toEqual(originalBoardState);
  });
  it("does not change values of the object used in the parameter after modifying the return object ", () => {
    const originalBoardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    let returnedBoardState = createNewBoardState(
      originalBoardState.board,
      originalBoardState.selectorPos
    );
    returnedBoardState.selectorPos.x = returnedBoardState.selectorPos.x + 1;
    expect(returnedBoardState).not.toEqual(originalBoardState);
  });
});
describe("moveSelector", () => {
  it("moves the selector's y position down (increments the value 1) when the desired direction is down", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 1 },
    };
    expect(moveSelector(boardState, "down")).toEqual(boardStateResult);
  });
  it("does not move the selector's y position down when the desired direction is down if the selector is on the bottom row", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 2 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 2 },
    };
    expect(moveSelector(boardState, "down")).toEqual(boardStateResult);
  });
  it("moves the selector's y position up when the desired direction is up if the selector is not on the top row", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 1 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    expect(moveSelector(boardState, "up")).toEqual(boardStateResult);
  });
  it("does not move the selector's y position up when the desired direction is up if the selector is on the top row", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    expect(moveSelector(boardState, "up")).toEqual(boardStateResult);
  });
  it("moves the selector's x position right (increments the value 1) when the desired direction is right", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 0 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 1, y: 0 },
    };
    expect(moveSelector(boardState, "right")).toEqual(boardStateResult);
  });
  it("does not move the selector's x position right when the desired direction is right if the selector is on the right column", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 2, y: 0 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 2, y: 0 },
    };
    expect(moveSelector(boardState, "right")).toEqual(boardStateResult);
  });
  it("moves the selector's x position left when the desired direction is left if the selector is not in the left column", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 1, y: 1 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 1 },
    };
    expect(moveSelector(boardState, "left")).toEqual(boardStateResult);
  });
  it("does not move the selector's x position left when the desired direction is left if the selector is in the left column", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 2 },
    };
    const boardStateResult = {
      board: [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 0, y: 2 },
    };
    expect(moveSelector(boardState, "left")).toEqual(boardStateResult);
  });
});
describe("alterBoardAtLocation", () => {
  it("changes an element of a 2d array at an x and y index", () => {
    const board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"],
    ];
    const boardResult = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "o"],
    ];
    expect(alterBoardAtLocation(board, 2, 2, "o")).toEqual(boardResult);
  });
});
describe("isEmptyAtSelectorLocation", () => {
  it("returns true when a board state has an empty space at its selector location", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "blank", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 1, y: 1 },
    };
    expect(isEmptyAtSelectorLocation(boardState)).toEqual(true);
  });
  it("returns false when a board state has an occupied space at its selector location", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "blank", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 2, y: 1 },
    };
    expect(isEmptyAtSelectorLocation(boardState)).toEqual(false);
  });
});
describe("placeLetter", () => {
  it("does not alter the board state when the selector location position is occupied", () => {
    const boardState = {
      board: [
        ["x", "o", "x"],
        ["x", "blank", "o"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 2, y: 2 },
    };
    expect(placeLetter(boardState)).toEqual(boardState);
  });
  it("places the correct letter in the position of the selector when it is not occupied", () => {
    const boardState = {
      board: [
        ["o", "o", "x"],
        ["x", "blank", "blank"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 1, y: 1 },
    };
    const resultBoardState = {
      board: [
        ["o", "o", "x"],
        ["x", "o", "blank"],
        ["o", "x", "x"],
      ],
      selectorPos: { x: 1, y: 1 },
    };
    expect(placeLetter(boardState)).toEqual(resultBoardState);
  });
});
