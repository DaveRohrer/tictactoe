// const readline = require("readline");
// const {
//   board,
//   letters,
//   boardPixelWidth,
//   letterPixelWidth,
//   letterPixelHeight,
//   gridPixelThickness,
//   letterPaddingThickness,
//   selectorChars,
//   selectorPixelWidth,
//   selectorPixelHeight,
//   numberOfSelectorChars,
// } = require("./assets");

// // View varaibles
// let selectorCharacterIndex;

// // View initialize method
// const initializeView = () => {
//   resetSelectorCharacter();
//   console.clear();
// };

// // Offset methods. These methods calculate how much padding is required before drawing
// // a letter or select indicator at a particular location.
// const getLetterDrawingOffsets = (boardPosition) => {
//   const yOffset = getDrawingOffset(
//     boardPosition.y,
//     letterPixelHeight,
//     gridPixelThickness,
//     letterPaddingThickness
//   );
//   const xOffset = getDrawingOffset(
//     boardPosition.x,
//     letterPixelWidth,
//     gridPixelThickness,
//     letterPaddingThickness
//   );
//   return { x: xOffset, y: yOffset };
// };

// getDrawingOffset = (drawPosition, length, gridThickness, cellPadding) => {
//   return (
//     drawPosition * length +
//     gridThickness +
//     cellPadding +
//     gridThickness * drawPosition +
//     cellPadding * 2 * drawPosition
//   );
// };

// getSelectorDrawingOffsets = (boardPosition) => {
//   const yOffset = getDrawingOffset(
//     boardPosition.y,
//     selectorPixelHeight,
//     gridPixelThickness,
//     0
//   );
//   const xOffset = getDrawingOffset(
//     boardPosition.x,
//     selectorPixelWidth,
//     gridPixelThickness,
//     0
//   );
//   return { x: xOffset, y: yOffset };
// };

// // Insert functions. These functions insert specific strings (such as the ascii art letters,
// // select indicator, and top/bottom messages into the larger board display string.
// const insertLetter = (boardStateDisplayString, drawPosition, letter) => {
//   let boardPixels = [...boardStateDisplayString];
//   const cleanedLetter = letter.match(/[^\n]/g);

//   for (let i = 0; i < letterPixelWidth * letterPixelHeight; i++) {
//     const offsets = getLetterDrawingOffsets(drawPosition);
//     const iIndex = Math.trunc(i / letterPixelWidth);
//     const jIndex = i % letterPixelWidth;
//     boardPixels[(iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x)] =
//       cleanedLetter[iIndex * letterPixelWidth + jIndex];
//   }
//   return boardPixels.join("");
// };

// const insertSelectBoarder = (boardStateDisplayString, selectorPosition) => {
//   let boardPixels = [...boardStateDisplayString];
//   for (let i = 0; i < selectorPixelWidth * selectorPixelHeight; i++) {
//     const offsets = getSelectorDrawingOffsets(selectorPosition);
//     const iIndex = Math.trunc(i / selectorPixelWidth);
//     const jIndex = i % selectorPixelWidth;
//     const currBoardIndex =
//       (iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x);
//     if (boardPixels[currBoardIndex] === "░")
//       boardPixels[currBoardIndex] = selectorChars[selectorCharacterIndex];
//   }
//   return boardPixels.join("");
// };

// const insertBoardState = (boardState, boardStateDisplayString) => {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (boardState[i][j] != "blank") {
//         boardStateDisplayString = insertLetter(
//           boardStateDisplayString,
//           { x: j, y: i },
//           letters[boardState[i][j]]
//         );
//       }
//     }
//   }
//   return boardStateDisplayString;
// };

// const insertTopMessage = (boardStateDisplayString, topMessage) => {
//   topMessage = topMessage.padStart(
//     topMessage.length + (boardPixelWidth - topMessage.length) / 2,
//     " "
//   );
//   return (topMessage + "\n").concat(boardStateDisplayString);
// };

// const insertBottomMenu = (boardStateDisplayString) => {
//   return boardStateDisplayString.concat(`\n  [R] Restart         [ESC] Quit  `);
// };

// // Select indicator functions to allow blinking
// const updateSelectorCharacterIndex = () => {
//   selectorCharacterIndex++;
//   if (selectorCharacterIndex >= numberOfSelectorChars) {
//     resetSelectorCharacter();
//   }
// };
// const resetSelectorCharacter = () => {
//   selectorCharacterIndex = 0;
// };

// // This is our main draw function. It starts with the blank board ascii art and inserts
// // the necessary letters, selector, and messages. It also clears necessary elements we
// // previously printed to the terminal and overwrites everything else.
// const updateView = (boardState, selectorPosition, topMessage) => {
//   let boardStateDisplayString = board;
//   boardStateDisplayString = insertBoardState(
//     boardState,
//     boardStateDisplayString,
//     selectorPosition
//   );
//   boardStateDisplayString = insertSelectBoarder(
//     boardStateDisplayString,
//     selectorPosition
//   );

//   // Put our cursor to the top so we overwrite our board everyframe without
//   // having to clear the console (and cause flickering) Howerver, we do need
//   // to clear the top line message so we dont get artifacts when it changes.
//   // TODO: now that you learned how to use cursor placement to determine where
//   // stuff prints to the screen, you could consider rending the entire board
//   // system using cursor movement rather than successively inserting characters
//   // into a big string.
//   readline.cursorTo(process.stdout, 0, 0);
//   process.stdout.clearLine(0);
//   boardStateDisplayString = insertTopMessage(
//     boardStateDisplayString,
//     topMessage
//   );
//   console.log(insertBottomMenu(boardStateDisplayString));
// };

// // Functions below this line are used for testing
// const setSelectorCharacterIndex = (index) => {
//   selectorCharacterIndex = index;
// };

// module.exports = {
//   updateView,
//   updateSelectorCharacterIndex,
//   resetSelectorCharacter,
//   initializeView,
//   // I put the functions I am exporting for testing under this comment until I learn more
//   // about how to properly handle encapsulation when doing jest testing.
//   board,
//   letters,
//   insertLetter,
//   insertSelectBoarder,
//   insertBoardState,
//   setSelectorCharacterIndex,
// };
