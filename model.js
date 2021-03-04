//board state

const blankBoardState = {
  board: [
    ["blank", "blank", "blank"],
    ["blank", "blank", "blank"],
    ["blank", "blank", "blank"],
  ],
  selectorPos: { x: 0, y: 0 },
};

const boardStates = [blankBoardState];

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

// // Model init function
// const initializeModel = (presentToView = true) => {
//   resetBoardState();
//   resetSelectorPosition();
//   selectorTicTimeout = setSelectorInterval();
//   playersTurn = "X";
//   if (presentToView) {
//     updateView(boardState, selectorPosition, topMessage(playersTurn));
//   }
// };

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

// // Input handler functions
// const moveSelector = (desiredDirection) => {
//   switch (desiredDirection) {
//     case "right":
//       if (selectorPosition.x < 2) {
//         selectorPosition.x++;
//       }
//       break;
//     case "left":
//       if (selectorPosition.x > 0) {
//         selectorPosition.x--;
//       }
//       break;
//     case "up":
//       if (selectorPosition.y > 0) {
//         selectorPosition.y--;
//       }
//       break;
//     case "down":
//       if (selectorPosition.y < 2) {
//         selectorPosition.y++;
//       }
//       break;
//     default:
//       break;
//   }
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

// //TODO consider changing this code to get the correct player turn just from the number of
// //xs and os in the array. Could remove that variable from other functions too if we wanted
// const flipTurn = () => {
//   if (playersTurn === "X") {
//     playersTurn = "O";
//   } else {
//     playersTurn = "X";
//   }
// };

// const hasOpenSpace = () => {
//   return (
//     boardState[0].includes("blank") ||
//     boardState[1].includes("blank") ||
//     boardState[2].includes("blank")
//   );
// };

// //TODO make some smaller functions to call in here
// const checkForWinner = () => {
//   for (let i = 0; i < 3; i++) {
//     if (
//       boardState[i][0] === boardState[i][1] &&
//       boardState[i][1] === boardState[i][2] &&
//       boardState[i][0] !== "blank"
//     ) {
//       return boardState[i][0];
//     } else if (
//       boardState[0][i] === boardState[1][i] &&
//       boardState[1][i] === boardState[2][i] &&
//       boardState[0][i] !== "blank"
//     ) {
//       return boardState[0][i];
//     }
//   }
//   if (
//     ((boardState[0][0] === boardState[1][1] &&
//       boardState[1][1] === boardState[2][2]) ||
//       (boardState[2][0] === boardState[1][1] &&
//         boardState[1][1] === boardState[0][2])) &&
//     boardState[1][1] !== "blank"
//   ) {
//     return boardState[1][1];
//   }
//   return hasOpenSpace() ? "no winner yet" : "draw game";
// };

// // This method returns whatever message should be displayed above the board
// const topMessage = (playersTurn) => {
//   switch (checkForWinner()) {
//     case "no winner yet":
//       return `Player ${playersTurn}'s Turn`;
//     case "draw game":
//       return `Draw Game!`;
//     default:
//       return `Player ${checkForWinner().toUpperCase()} Wins!`;
//   }
// };

// // Setter/getter functions currently used for testing
// const setBoard = (desiredBoardState) => {
//   boardState = desiredBoardState;
// };
// const getBoardState = () => {
//   return boardState;
// };
// const setSelectorPosition = (y, x) => {
//   selectorPosition.y = y;
//   selectorPosition.x = x;
// };

// module.exports = {
//   moveSelector,
//   initializeModel,
//   placeLetter,
//   resetModel,
//   // I put the functions I am exporting for testing under this comment until I learn more
//   // about how to properly handle encapsulation when doing jest testing.
//   setBoard,
//   checkForWinner,
//   getBoardState,
//   setSelectorPosition,
//   placeLetter,
// };
