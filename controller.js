const readline = require("readline");
const { handleMoveRequest, handlePlacementRequest } = require("./model");

const initializeController = () => {
  const validMoveKeys = ["right", "left", "up", "down"];
  const validLetterPlacingKeys = ["return", "space"];
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true); //remove standard node keypress events and take full control
  process.stdin.on("keypress", (str, key) => {
    if ((key.ctrl && key.name === "c") || key.name === "escape") {
      process.exit(); //TODO make a proper exit function in model to call here also
    } else if (validMoveKeys.includes(key.name)) {
      handleMoveRequest(key.name);
    } else if (validLetterPlacingKeys.includes(key.name)) {
      handlePlacementRequest();
      //      handleRequest(key.name);
    } else if (key.name === "r") {
      //     resetModel();
    }
  });
};

module.exports = { initializeController };
