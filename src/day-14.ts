import { expectTypeOf, test } from "vitest";

type DecipherNaughtyList<TString extends string> =
  TString extends `${infer First}/${infer Rest}`
    ? DecipherNaughtyList<First> | DecipherNaughtyList<Rest>
    : TString extends `${infer Name}`
    ? Name
    : never;

test("Day Fourteen", () => {
  type test_0_actual = DecipherNaughtyList<"timmy/jimmy">;
  //   ^?
  type test_0_expected = "jimmy" | "timmy";
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = DecipherNaughtyList<"elliot">;
  //   ^?
  type test_1_expected = "elliot";
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = DecipherNaughtyList<"melkey/prime/theo/trash">;
  //   ^?
  type test_2_expected = "melkey" | "prime" | "theo" | "trash";
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();
});
