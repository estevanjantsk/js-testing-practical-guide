import { it, expect } from "vitest";

import { add } from "./math";

it("should summarize all number values in an array", () => {
  // arrange
  const numbers = [1, 2, 3];
  const expected = 6;

  // act
  const res = add(numbers);

  // assert
  expect(res).toEqual(expected);
});

it("should yield NaN if a least one invalid number is provided", () => {
  // arrange
  const inputs = ["number", 1];
  // act
  const result = add(inputs);
  // assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // arrange
  const inputs = ["1", "2"];
  const expected = 3;
  // act
  const result = add(inputs);
  // assert
  expect(result).toBe(expected);
});

it("should yield 0 if an empty array is provided", () => {
  // arrange
  const inputs = [];
  const expected = 0;
  // act
  const result = add(inputs);
  // assert
  expect(result).toBe(expected);
});

it("should throw an error if no value is passed to the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw an error if multiple values are passed to the function", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
