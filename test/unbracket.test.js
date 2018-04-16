const unbracket = require("../lib/unbracket");
const expect = require("chai").expect;

describe("unbracket", () => {
  describe("unbracketWithParenthesis", () => {
    it("should unwrap items insides parenthesis", () => {
      const str = "I don't (really) think that you should do this (crazy) thing";
      expect(unbracket.unbracketWithParenthesis(str)).to.deep.equal(["really", "crazy"]);
    });
    it("should unwrap items and not care about nested parenthesis", () => {
      const str = "I don't (really, like (hell) really), care ! Sorry (or not)";
      expect(unbracket.unbracketWithParenthesis(str)).to.deep.equal(["really, like (hell", "or not"]);
    });
  });
  describe("unbracketWithBrackets", () => {
    it("should unwrap items insides brackets", () => {
      const str = "I don't [really] think that you should do this [crazy] thing";
      expect(unbracket.unbracketWithBrackets(str)).to.deep.equal(["really", "crazy"]);
    });
  });
  describe("unbracketWithCurlyBraces", () => {
    it("should unwrap items insides curly braces", () => {
      const str = "I don't {really} think that you should do this {crazy} thing";
      expect(unbracket.unbracketWithCurlyBraces(str)).to.deep.equal(["really", "crazy"]);
    });
  });
  describe("unbracketWithRafters", () => {
    it("should unwrap items insides rafters", () => {
      const str = "I don't <really> think that you should do this <crazy> thing";
      expect(unbracket.unbracketWithRafters(str)).to.deep.equal(["really", "crazy"]);
    });
  });
});