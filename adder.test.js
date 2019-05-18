const adder = require("./adder");

describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(1, 2)).toBe(3);
  });
  it("should add just one number", () => {
    expect(adder(4)).toBe(4);
  });
  it("should add three numbers", () => {
    expect(adder(1, 2, 3)).toBe(6);
  });
  it("should add 0 numbers", () => {
    expect(adder()).toBe(0);
  });
});
