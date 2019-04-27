const adder = require("./adder");

describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(1, 2)).toBe(3);
  });
});
