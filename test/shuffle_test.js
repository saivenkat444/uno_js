import { assert, assertEquals } from "jsr:@std/assert";
import { add } from "../main.js";

//sample test function for reference 
Deno.test("PASSING test", () => {
  const actual = add(2, 3);
  const expected = 5;
  assertEquals(actual, expected)
});

Deno.test("FAILING test", () => {
  const actual = add(2, 3);
  const expected = 7;
  assertEquals(actual, expected)
});