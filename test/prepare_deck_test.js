import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { prepareColorCards } from "../src/prepare_deck.js";

describe("fetchNlines(count, content, readFromTop = true)", () => {
  it("should give exact lines of the file when the count of lines is equal to the count", () => {
    const actual = prepareColorCards("red");
    const expected = [{type: "red", attribute:"0"}, 
    { type: "red", attribute: "1"},
    { type: "red", attribute: "1"},
    { type: "red", attribute: "2"},
    { type: "red", attribute: "2"},
    { type: "red", attribute: "3"},
    { type: "red", attribute: "3"},
    { type: "red", attribute: "4"},
    { type: "red", attribute: "4"},
    { type: "red", attribute: "5"},
    { type: "red", attribute: "5"},
    { type: "red", attribute: "6"},
    { type: "red", attribute: "6"},
    { type: "red", attribute: "7"},
    { type: "red", attribute: "7"},
    { type: "red", attribute: "8"},
    { type: "red", attribute: "8"},
    { type: "red", attribute: "9"},
    { type: "red", attribute: "9"},
    { type: "red", attribute: "reverse"},
    { type: "red", attribute: "reverse"},
    { type: "red", attribute: "skip"},
    { type: "red", attribute: "skip"},
    { type: "red", attribute: "+2"},
    { type: "red", attribute: "+2"}
    ];
    assertEquals(actual, expected);
  });
});
