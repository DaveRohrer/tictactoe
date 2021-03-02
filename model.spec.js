const { describe } = require("yargs");
const {
  moveSelector,
  initializeModel,
  placeLetter,
  resetModel,
} = require("./model");

//describe("checkForWinner()", () => {
it("returns 'x' when x occupies 3 sequental horizontal spaces", () => {
  //arange

  //act   -- probably can put all three checks here
  //assert
  expect(checkForWinner()).toEqual("x");
});
//});
