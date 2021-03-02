const board = `╔══════════╦══════════╦══════════╗
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╠══════════╬══════════╬══════════╣
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╠══════════╬══════════╬══════════╣
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╚══════════╩══════════╩══════════╝`;

const letters = {
  x: `██╗░░██╗
╚██╗██╔╝
░╚███╔╝░
░██╔██╗░
██╔╝╚██╗
╚═╝░░╚═╝`,
  o: `░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`,
};
const selectorChars = ["▒", " "];

const boardPixelWidth = board.substr(0, board.indexOf("\n") + 1).length; //We do want to preserve new lines in the board string
const boardPixelHeight = board.match(/\n/g).length + 1;
const letterPixelWidth = letters.x.substr(0, letters.x.indexOf("\n")).length; //We wont preserve newlines when inserting letters
const letterPixelHeight = letters.x.match(/\n/g).length + 1;
const gridPixelThickness = 1;
const letterPaddingThickness = 1;
const selectorPixelWidth = (boardPixelWidth - 1 - gridPixelThickness * 4) / 3;
const selectorPixelHeight = (boardPixelHeight - gridPixelThickness * 4) / 3;
const numberOfSelectorChars = selectorChars.length;

module.exports = {
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
};
