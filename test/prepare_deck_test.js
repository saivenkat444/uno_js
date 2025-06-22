import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { prepareColorCards, prepareWildCards } from "../src/prepare_deck.js";

describe("preparColorCards(color)", () => {
  it("should give the pack of the colour cards", () => {
    const actual = prepareColorCards("red");
    const expected = [
    { type: "red", attribute:"0"}, 
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
    it("should be empty when there is no colour", () => {
    const actual = prepareColorCards("");
    const expected = [
    { type: "", attribute:"0"}, 
    { type: "", attribute: "1"},
    { type: "", attribute: "1"},
    { type: "", attribute: "2"},
    { type: "", attribute: "2"},
    { type: "", attribute: "3"},
    { type: "", attribute: "3"},
    { type: "", attribute: "4"},
    { type: "", attribute: "4"},
    { type: "", attribute: "5"},
    { type: "", attribute: "5"},
    { type: "", attribute: "6"},
    { type: "", attribute: "6"},
    { type: "", attribute: "7"},
    { type: "", attribute: "7"},
    { type: "", attribute: "8"},
    { type: "", attribute: "8"},
    { type: "", attribute: "9"},
    { type: "", attribute: "9"},
    { type: "", attribute: "reverse"},
    { type: "", attribute: "reverse"},
    { type: "", attribute: "skip"},
    { type: "", attribute: "skip"},
    { type: "", attribute: "+2"},
    { type: "", attribute: "+2"}
    ];
    assertEquals(actual, expected);
  });
});

describe("prepareWildCards()", () => {
  it("should give the pack of the wild cards", () => {
    const actual = prepareWildCards();
    const expected = [
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    ];
    assertEquals(actual, expected);
  });
  
  it("should not break even there is a parameter", () => {
    const actual = prepareWildCards();
    const expected = [
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "colour_change"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    {type: "Wild", attribute: "+4"},
    ];
    assertEquals(actual, expected);
  })
})
