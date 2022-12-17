import { it, expect } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

it("should NOT throw an error if input is a number", () => {
  // arrange
  const input = 1;
  // act
  const resFn = () => {
    validateNumber(input);
  };
  // assert
  expect(resFn).not.toThrow();
});
it("should throw an error if input is NOT a number", () => {
  // arrange
  const input = "not a number";
  // act
  const resFn = () => {
    validateNumber(input);
  };
  // assert
  expect(resFn).toThrow(/Invalid number input/);
});
it("should NOT throw an error if input is a not empty string", () => {
  // arrange
  const input = "string";
  // act
  const resFn = () => {
    validateStringNotEmpty(input);
  };
  // assert
  expect(resFn).not.toThrow();
});
it("should throw an error if input an empty string", () => {
  // arrange
  const input = "";
  // act
  const resFn = () => {
    validateStringNotEmpty(input);
  };
  // assert
  expect(resFn).toThrow(/Invalid input - must not be empty/);
});
