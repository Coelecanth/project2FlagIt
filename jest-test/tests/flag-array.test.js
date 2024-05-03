/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { shuffled } = require("../game.js");
const { clear } = require("console");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("array shuffle", () => {
    describe("shuffles array", () => {
        test('should return values', () => {
            expect(shuffled).toBeUndefined(undefined);
        });
    });
    
});



if (typeof module !== "undefined") module.exports = {
    shuffled
}    