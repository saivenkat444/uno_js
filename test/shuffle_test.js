import { assertEquals } from "jsr:@std/assert";


//sample test function for reference 
Deno.test("simple test", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});