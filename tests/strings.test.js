const Strings = require("../index");

test("Capitalizes simple string", () => {
  expect(Strings.capitalize("hello")).toBe("Hello");
});

test("Returns empty string if attemting to capitalize empty string", () => {
  expect(Strings.capitalize("")).toBe("");
});

test("Throws error when trying to capitalize non-string values", () => {
  expect(() => Strings.capitalize(1000)).toThrow();
  expect(() => Strings.capitalize(["an", "array"])).toThrow();
  expect(() => Strings.capitalize({ object: true })).toThrow();
  expect(() => Strings.capitalize(null)).toThrow();
  expect(() => Strings.capitalize(undefined)).toThrow();
  expect(() => Strings.capitalize(true)).toThrow();
});

test("Randomizes string of specified length", () => {
  expect(Strings.randomize()).toHaveLength(10);
  expect(Strings.randomize(11)).toHaveLength(11);
  expect(Strings.randomize(25)).toHaveLength(25);
  expect(Strings.randomize(100)).toHaveLength(100);
});

test("Randomized strings are different each time the function is called", () => {
  const randomized = Strings.randomize();
  const testStrings = [];
  for (let i = 0; i < 100; i++) {
    testStrings.push(Strings.randomize());
  }

  expect(testStrings).not.toContain(randomized);
});
