import { expectTypeOf, test } from "vitest";

type BoxToy<
  TText,
  TNumber,
  Acc extends any[] = [],
> = Acc["length"] extends TNumber
  ? Acc
  : BoxToy<TText, TNumber, [...Acc, TText]>;

type BoxToys<TText, TUnion> = TUnion extends TUnion
  ? BoxToy<TText, TUnion>
  : never;

test("Day Fifteen", () => {
  type test_doll_actual = BoxToys<"doll", 1>;
  //   ^?
  type test_doll_expected = ["doll"];
  expectTypeOf<test_doll_actual>().toEqualTypeOf<test_doll_expected>();

  type test_nutcracker_actual = BoxToys<"nutcracker", 3 | 4>;
  //   ^?
  type test_nutcracker_expected =
    | ["nutcracker", "nutcracker", "nutcracker"]
    | ["nutcracker", "nutcracker", "nutcracker", "nutcracker"];
  expectTypeOf<test_nutcracker_actual>().toEqualTypeOf<test_nutcracker_expected>();
});
