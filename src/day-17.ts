import { expectTypeOf, test } from "vitest";

type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type WhoWins<Y, Me> = Y extends Me
  ? "draw"
  : Me extends "👊🏻"
    ? Y extends "🖐🏾"
      ? "lose"
      : "win"
    : Me extends "🖐🏾"
      ? Y extends "👊🏻"
        ? "win"
        : "lose"
      : Me extends "✌🏽"
        ? Y extends "👊🏻"
          ? "lose"
          : "win"
        : "lose";

test("Day Seventeen", () => {
  type test_0_actual = WhoWins<"👊🏻", "🖐🏾">;
  //   ^?
  type test_0_expected = "win";
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = WhoWins<"👊🏻", "✌🏽">;
  //   ^?
  type test_1_expected = "lose";
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = WhoWins<"👊🏻", "👊🏻">;
  //   ^?
  type test_2_expected = "draw";
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual = WhoWins<"🖐🏾", "👊🏻">;
  //   ^?
  type test_3_expected = "lose";
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type test_4_actual = WhoWins<"🖐🏾", "✌🏽">;
  //   ^?
  type test_4_expected = "win";
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();

  type test_5_actual = WhoWins<"🖐🏾", "🖐🏾">;
  //   ^?
  type test_5_expected = "draw";
  expectTypeOf<test_5_actual>().toEqualTypeOf<test_5_expected>();

  type test_6_actual = WhoWins<"✌🏽", "👊🏻">;
  //   ^?
  type test_6_expected = "win";
  expectTypeOf<test_6_actual>().toEqualTypeOf<test_6_expected>();

  type test_7_actual = WhoWins<"✌🏽", "✌🏽">;
  //   ^?
  type test_7_expected = "draw";
  expectTypeOf<test_7_actual>().toEqualTypeOf<test_7_expected>();

  type test_8_actual = WhoWins<"✌🏽", "🖐🏾">;
  //   ^?
  type test_8_expected = "lose";
  expectTypeOf<test_8_actual>().toEqualTypeOf<test_8_expected>();
});
