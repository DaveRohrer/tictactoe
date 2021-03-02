const { setBoard, checkForWinner } = require("./model");
describe("checkForWinner", () => {
  it("returns 'x' when x occupies 3 sequental horizontal spaces in the first row", () => {
    setBoard([
      ["x", "x", "x"],
      ["o", "o", "blank"],
      ["o", "x", "blank"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'x' when x occupies 3 sequental horizontal spaces in the second row", () => {
    setBoard([
      ["x", "o", "o"],
      ["x", "x", "x"],
      ["o", "blank", "blank"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'x' when x occupies 3 sequental horizontal spaces in the third row", () => {
    setBoard([
      ["blank", "blank", "o"],
      ["o", "x", "o"],
      ["x", "x", "x"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'o' when o occupies 3 sequental horizontal spaces in the first row", () => {
    setBoard([
      ["o", "o", "o"],
      ["x", "x", "blank"],
      ["x", "blank", "blank"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'o' when o occupies 3 sequental horizontal spaces in the second row", () => {
    setBoard([
      ["blank", "x", "x"],
      ["o", "o", "o"],
      ["x", "blank", "blank"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'o' when o occupies 3 sequental horizontal spaces in the third row", () => {
    setBoard([
      ["blank", "blank", "x"],
      ["x", "blank", "x"],
      ["o", "o", "o"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'x' when x occupies 3 sequental vertical spaces in the first column", () => {
    setBoard([
      ["x", "o", "o"],
      ["x", "o", "blank"],
      ["x", "x", "blank"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'x' when x occupies 3 sequental vertical spaces in the second column", () => {
    setBoard([
      ["o", "x", "o"],
      ["blank", "x", "x"],
      ["o", "x", "blank"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'x' when x occupies 3 sequental vertical spaces in the third column", () => {
    setBoard([
      ["blank", "blank", "x"],
      ["o", "o", "x"],
      ["x", "o", "x"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'o' when o occupies 3 sequental vertical spaces in the first column", () => {
    setBoard([
      ["o", "x", "x"],
      ["o", "x", "blank"],
      ["o", "blank", "blank"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'o' when o occupies 3 sequental vertical spaces in the second column", () => {
    setBoard([
      ["blank", "o", "x"],
      ["x", "o", "blank"],
      ["x", "o", "blank"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'o' when o occupies 3 sequental vertical spaces in the third column", () => {
    setBoard([
      ["blank", "blank", "o"],
      ["x", "blank", "o"],
      ["x", "x", "o"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'x' when x occupies 3 sequental diagonal spaces bottom left to top right", () => {
    setBoard([
      ["blank", "blank", "x"],
      ["o", "x", "blank"],
      ["x", "blank", "o"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'x' when x occupies 3 sequental diagonal spaces top left to bottom right", () => {
    setBoard([
      ["x", "blank", "o"],
      ["blank", "x", "blank"],
      ["o", "blank", "x"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
  it("returns 'o' when o occupies 3 sequental diagonal spaces bottom left to top right", () => {
    setBoard([
      ["blank", "blank", "o"],
      ["x", "o", "blank"],
      ["o", "x", "x"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'o' when o occupies 3 sequental diagonal spaces top left to bottom right", () => {
    setBoard([
      ["o", "x", "x"],
      ["blank", "o", "blank"],
      ["x", "blank", "o"],
    ]);
    expect(checkForWinner()).toEqual("o");
  });
  it("returns 'no winner yet' when no one has won and there are still several blank spaces", () => {
    setBoard([
      ["o", "x", "o"],
      ["blank", "x", "blank"],
      ["x", "blank", "o"],
    ]);
    expect(checkForWinner()).toEqual("no winner yet");
  });
  it("returns 'no winner yet' when no one has won and there is one blank space left", () => {
    setBoard([
      ["o", "x", "o"],
      ["o", "x", "blank"],
      ["x", "o", "o"],
    ]);
    expect(checkForWinner()).toEqual("no winner yet");
  });
  it("returns 'draw game' when no one has won and there no blank spaces left", () => {
    setBoard([
      ["x", "x", "o"],
      ["o", "x", "x"],
      ["x", "o", "o"],
    ]);
    expect(checkForWinner()).toEqual("draw game");
  });
  it("returns the correct winner on a full board", () => {
    setBoard([
      ["x", "x", "x"],
      ["o", "o", "x"],
      ["x", "o", "o"],
    ]);
    expect(checkForWinner()).toEqual("x");
  });
});
