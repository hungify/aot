import { expectTypeOf, test } from "vitest";

type FindSantaArr<
  TArr,
  TSearch = "🎅🏼",
  V extends unknown[] = [],
> = TArr extends [infer TFist, ...infer TRest]
  ? TFist extends TSearch
    ? V["length"]
    : FindSantaArr<
        TRest,
        TSearch,
        ["value  is visited, help to traverse array", ...V]
      >
  : never;

type FindSanta<
  TMatrix,
  TSearch = "🎅🏼",
  V extends unknown[][] = [[]],
  R extends unknown[] = [],
> = TMatrix extends [infer FirstArr, ...infer Rest]
  ? FirstArr extends unknown[]
    ? FindSantaArr<FirstArr, TSearch> extends never
      ? FindSanta<Rest, TSearch, [...V, ["seen"]], [...R, "a"]>
      : [R["length"], FindSantaArr<FirstArr, TSearch>]
    : never
  : never;
test("Day Sixteen", () => {
  type Forest0 = [
    ["🎅🏼", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
  ];
  type test_0_actual = FindSanta<Forest0>;
  //   ^?
  type test_0_expected = [0, 0];
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type Forest1 = [
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎅🏼", "🎄", "🎄"],
  ];
  type test_1_actual = FindSanta<Forest1>;
  //   ^?
  type test_1_expected = [3, 1];
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type Forest2 = [
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎅🏼", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
  ];
  type test_2_actual = FindSanta<Forest2>;
  //   ^?
  type test_2_expected = [2, 2];
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type Forest3 = [
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎅🏼", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
  ];
  type test_3_actual = FindSanta<Forest3>;
  //   ^?
  type test_3_expected = [2, 1];
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type Forest4 = [
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎅🏼", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
    ["🎄", "🎄", "🎄", "🎄"],
  ];
  type test_4_actual = FindSanta<Forest4>;
  //   ^?
  type test_4_expected = [1, 2];
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();
});
