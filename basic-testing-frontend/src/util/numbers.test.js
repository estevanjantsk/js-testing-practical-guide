import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("should return a same number if a number is passed", () => {
  // arrange
  const input = 1;

  // act
  const res = transformToNumber(input);

  // assert
  expect(input).toEqual(res);
});

it("should convert a number if a string number is passed", () => {
  // arrange
  const input = "123";
  const expected = 123;

  // act
  const res = transformToNumber(input);

  // assert
  expect(res).toEqual(expected);
  expect(res).toBeTypeOf("number");
});

it("should throw an error if invalid param is passed", () => {
  // arrange
  const input = "12cs";

  // act
  const res = transformToNumber(input);

  // assert
  expect(res).toBeNaN();
});
