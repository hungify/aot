import { expectTypeOf, test } from "vitest";

type StreetSuffixTester<TStreet, TSuffix> =
  TStreet extends `${string} ${infer Tail}`
    ? Tail extends TSuffix
      ? true
      : StreetSuffixTester<Tail, TSuffix>
    : false;

test("Day Ten", () => {
  type test_0_actual = StreetSuffixTester<"Candy Cane Way", "Way">;
  //   ^?
  type test_0_expected = true;
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = StreetSuffixTester<"Chocalate Drive", "Drive">;
  //   ^?
  type test_1_expected = true;
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = StreetSuffixTester<"Sugar Lane", "Drive">;
  //   ^?
  type test_2_expected = false;
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual = StreetSuffixTester<
    "Fifth Dimensional Nebulo 9",
    "invalid"
  >;
  //   ^?
  type test_3_expected = false;
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();
});
