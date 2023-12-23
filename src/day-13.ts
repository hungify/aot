import test from "node:test";
import { expectTypeOf } from "vitest";

type DayCounter<
  L extends number,
  H,
  Acc extends number[] = []
> = Acc["length"] extends H
  ? [...Acc, Acc["length"]][number]
  : Acc["length"] extends L
  ? DayCounter<number, H, [...Acc, Acc["length"]]>
  : DayCounter<L, H, [...Acc, L]>;

test("Day Thirteen", () => {
  type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  type test_0_actual = DayCounter<1, 12>;
  //   ^?
  type test_0_expected = TwelveDaysOfChristmas;
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type DaysUntilChristmas =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25;
  type test_1_actual = DayCounter<1, 25>;
  //   ^?
  type test_1_expected = DaysUntilChristmas;

  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();
});
