const readline = require("readline");
const {
  board,
  letters,
  boardPixelWidth,
  letterPixelWidth,
  letterPixelHeight,
  gridPixelThickness,
  letterPaddingThickness,
  selectorChars,
  selectorPixelWidth,
  selectorPixelHeight,
  numberOfSelectorChars,
} = require("./assets");

// // View varaibles
let selectorCharacterIndex = 0;

// // View initialize method
const initializeView = () => {
  resetSelectorCharacter();
  console.clear();
};

// Offset methods. These methods calculate how much padding is required before drawing
// a letter or select indicator at a particular location.
const getLetterInsertionOffsets = (boardPosition) => {
  return {
    x: getInsertionOffset(
      boardPosition.x,
      letterPixelWidth,
      gridPixelThickness,
      letterPaddingThickness
    ),
    y: getInsertionOffset(
      boardPosition.y,
      letterPixelHeight,
      gridPixelThickness,
      letterPaddingThickness
    ),
  };
};

getInsertionOffset = (drawPosition, length, gridThickness, cellPadding) => {
  return (
    drawPosition * length +
    gridThickness +
    cellPadding +
    gridThickness * drawPosition +
    cellPadding * 2 * drawPosition
  );
};

getSelectorInsertionOffsets = (boardPosition) => {
  return {
    x: getInsertionOffset(
      boardPosition.x,
      selectorPixelWidth,
      gridPixelThickness,
      0
    ),
    y: getInsertionOffset(
      boardPosition.y,
      selectorPixelHeight,
      gridPixelThickness,
      0
    ),
  };
};

// Insert functions. These functions insert specific strings (such as the ascii art letters,
// select indicator, and top/bottom messages into the larger board display string.
const insertLetter = (boardStateDisplayString, drawPosition, letter) => {
  let boardPixels = [...boardStateDisplayString];
  const cleanedLetter = letter.match(/[^\n]/g);

  for (let i = 0; i < letterPixelWidth * letterPixelHeight; i++) {
    const offsets = getLetterInsertionOffsets(drawPosition);
    const iIndex = Math.trunc(i / letterPixelWidth);
    const jIndex = i % letterPixelWidth;
    boardPixels[(iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x)] =
      cleanedLetter[iIndex * letterPixelWidth + jIndex];
  }
  return boardPixels.join("");
};

// TODO make functional where it does not use global variable.. pass it in, and also rename function.
const insertSelectBoarder = (boardStateDisplayString, selectorPosition) => {
  let boardPixels = [...boardStateDisplayString];
  for (let i = 0; i < selectorPixelWidth * selectorPixelHeight; i++) {
    const offsets = getSelectorInsertionOffsets(selectorPosition);
    const iIndex = Math.trunc(i / selectorPixelWidth);
    const jIndex = i % selectorPixelWidth;
    const currBoardIndex =
      (iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x);
    if (boardPixels[currBoardIndex] === "░")
      boardPixels[currBoardIndex] = selectorChars[selectorCharacterIndex];
  }
  return boardPixels.join("");
};

const insertBoardState = (boardState, boardStateDisplayString) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardState[i][j] != "blank") {
        boardStateDisplayString = insertLetter(
          boardStateDisplayString,
          { x: j, y: i },
          letters[boardState[i][j]]
        );
      }
    }
  }
  return boardStateDisplayString;
};

const insertTopMessage = (boardStateDisplayString, topMessage) => {
  return (
    topMessage
      .padStart(
        topMessage.length + (boardPixelWidth - topMessage.length) / 2,
        " "
      )
      .padEnd(boardPixelWidth, " ") + "\n"
  ).concat(boardStateDisplayString);
};

const insertBottomMenu = (boardStateDisplayString) => {
  return boardStateDisplayString.concat(`\n  [R] Restart         [ESC] Quit  `);
};

// TODO make functional where it does not alter global variable
const updateSelectorCharacterIndex = () => {
  selectorCharacterIndex++;
  if (selectorCharacterIndex >= numberOfSelectorChars) {
    resetSelectorCharacter();
  }
};
// TODO make functional where it does not alter global variable
const resetSelectorCharacter = () => {
  selectorCharacterIndex = 0;
};

// This is our main draw function. It starts with the blank board ascii art and inserts
// the necessary letters, selector, and messages. It also clears necessary elements we
// previously printed to the terminal and overwrites everything else.
const updateView = (boardState, selectorPosition, topMessage) => {
  readline.cursorTo(process.stdout, 0, 0);
  console.log(
    insertBottomMenu(
      insertTopMessage(
        insertSelectBoarder(
          insertBoardState(boardState, board, selectorPosition),
          selectorPosition
        ),
        topMessage
      )
    )
  );
};

module.exports = {
  updateView,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
  initializeView,
};
