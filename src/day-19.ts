import { expectTypeOf, test } from "vitest";
type GetGif<Number> = Number extends 0
  ? "🛹"
  : Number extends 1
  ? "🚲"
  : Number extends 2
  ? "🛴"
  : Number extends 3
  ? "🏄"
  : "🛹";

type Build<
  Number,
  Index,
  Result extends any[] = []
> = Result["length"] extends Number
  ? Result
  : Build<Number, Index, [...Result, GetGif<Index>]>;

type Rebuild<A, V extends any[] = [], R extends any[] = []> = A extends [
  infer F,
  ...infer Rest
]
  ? Rebuild<
      Rest,
      GetGif<V["length"]> extends "🏄" ? [] : [...V, "a"],
      [...R, ...Build<F, V["length"]>]
    >
  : R;

test("Day Nineteen", () => {
  type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
  //   ^?
  type test_0_expected = [
    "🛹",
    "🛹",
    "🚲",
    "🛴",
    "🛴",
    "🛴",
    "🏄",
    "🏄",
    "🏄",
    "🛹",
    "🚲",
    "🛴",
    "🛴"
  ];
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
  //   ^?
  type test_1_expected = [
    "🛹",
    "🛹",
    "🛹",
    "🚲",
    "🚲",
    "🚲",
    "🛴",
    "🛴",
    "🏄",
    "🛹",
    "🛹",
    "🚲",
    "🛴",
    "🛴"
  ];
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
  //   ^?
  type test_2_expected = [
    "🛹",
    "🛹",
    "🚲",
    "🚲",
    "🚲",
    "🛴",
    "🛴",
    "🛴",
    "🏄",
    "🏄",
    "🏄",
    "🏄",
    "🏄",
    "🛹",
    "🚲",
    "🛴",
    "🛴"
  ];
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();
});
