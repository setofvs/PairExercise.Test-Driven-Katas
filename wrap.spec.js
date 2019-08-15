const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Returns a string where each line is less than the column number", () => {
    wrap(
      "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
      20
    )
      .split("\n")
      .forEach(line => {
        expect(line.length <= 20).to.equal(true);
      });
  });

  it("Returns the same amount of words", () => {
    const array = wrap(
      "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
      20
    )
      .split("\n")
      .join(" ")
      .split(" ");
    expect(array.length).to.equal(16);
  });
});
