const viralAd = require("./viralAd.js");

describe("Test ViralAd functionalities", () => {
  it("should give the number of likes given the days", () => {
    expect(viralAd(3)).toBe(9);
  });
  it("should give the number of likes given the days", () => {
    expect(viralAd(5)).toBe(24);
  });
});
