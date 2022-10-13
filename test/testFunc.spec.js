const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(345) should return (543)", () => {
        expect(convert(345)).to.be.equal(543);
    })

    it("convert(-123) should return -321", () => {
        expect(convert(-123)).to.be.equal(-321);
    })
})