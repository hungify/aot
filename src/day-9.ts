// This is a normal approach, but it has a limitation of 50 characters
// type Reverse<TWord extends string> =
//   TWord extends `${infer TBegin}${infer TEnd}`
//     ? `${Reverse<TEnd>}${TBegin}`
//     : TWord;

import test from "node:test";
import { expectTypeOf } from "vitest";

// This is a better approach
type Reverse<
  TWord extends string,
  Acc extends string = ""
> = TWord extends `${infer Head}${infer Tail}`
  ? Reverse<Tail, `${Head}${Acc}`>
  : Acc;

test("Day Nine", () => {
  type test_0_actual = Reverse<"rehsaD">;
  //   ^?
  type test_0_expected = "Dasher";
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = Reverse<"recnaD">;
  //   ^?
  type test_1_expected = "Dancer";
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = Reverse<"recnarP">;
  //   ^?
  type test_2_expected = "Prancer";
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual = Reverse<"nexiV">;
  //   ^?
  type test_3_expected = "Vixen";
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type test_4_actual = Reverse<"temoC">;
  //   ^?
  type test_4_expected = "Comet";
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();

  type test_5_actual = Reverse<"dipuC">;
  //   ^?
  type test_5_expected = "Cupid";
  expectTypeOf<test_5_actual>().toEqualTypeOf<test_5_expected>();

  type test_6_actual = Reverse<"rennoD">;
  //   ^?
  type test_6_expected = "Donner";
  expectTypeOf<test_6_actual>().toEqualTypeOf<test_6_expected>();

  type test_7_actual = Reverse<"neztilB">;
  //   ^?
  type test_7_expected = "Blitzen";
  expectTypeOf<test_7_actual>().toEqualTypeOf<test_7_expected>();

  type test_8_actual = Reverse<"hploduR">;
  //   ^?
  type test_8_expected = "Rudolph";
  expectTypeOf<test_8_actual>().toEqualTypeOf<test_8_expected>();
});
