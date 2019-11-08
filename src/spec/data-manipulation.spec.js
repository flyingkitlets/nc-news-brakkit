const { expect } = require("chai");
import formatDates from "../utils/data-manipulation";


describe("formatDates", () => {
  it("returns a formatted time and date when passed a UTC date string", () => {
    expect(formatDates("2018-01-19T14:47:14.514Z")).to.equal(
      "14:47 19/01/2018"
    );
    expect(formatDates("2017-07-15T21:11:34.498Z")).to.equal(
      "21:11 15/07/2017"
    );
  });
});
