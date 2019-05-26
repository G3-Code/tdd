const beautifulDay = require("./beautifulDay");

describe("Testing Beautiful day", () => {
  it("Should return the number of days taking a range", () => {
    expect(beautifulDay(20, 23, 6)).toBe(2);
  });
  it("Should return the number of days taking a range", () => {
    expect(beautifulDay(20, 23, 8)).toBe(1);
  });
});
