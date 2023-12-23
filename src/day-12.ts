import { expectTypeOf, test } from "vitest";

type FindSanta<
  TArr,
  TSearch = "🎅🏼",
  TVisited extends unknown[] = []
> = TArr extends [infer TFist, ...infer TRest]
  ? TFist extends TSearch
    ? TVisited["length"]
    : FindSanta<
        TRest,
        TSearch,
        ["value  is visited, help to traverse array", ...TVisited]
      >
  : never;

test("Day Twelve", () => {
  type Forest0 = ["🎅🏼", "🎄", "🎄", "🎄"];
  type test_0_actual = FindSanta<Forest0>;
  //   ^?
  type test_0_expected = 0;
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type Forest1 = ["🎄", "🎅🏼", "🎄", "🎄", "🎄", "🎄"];
  type test_1_actual = FindSanta<Forest1>;
  //   ^?
  type test_1_expected = 1;
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type Forest2 = ["🎄", "🎄", "🎅🏼", "🎄"];
  type test_2_actual = FindSanta<Forest2>;
  //   ^?
  type test_2_expected = 2;
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type Forest3 = ["🎄", "🎄", "🎄", "🎅🏼", "🎄"];
  type test_3_actual = FindSanta<Forest3>;
  //   ^?
  type test_3_expected = 3;
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type Forest4 = ["🎄", "🎄", "🎄", "🎄"];
  type test_4_actual = FindSanta<Forest4>;
  //   ^?
  type test_4_expected = never;
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();
});
