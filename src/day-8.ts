import { expectTypeOf, test } from "vitest";

type RemoveNaughtyChildren<TObj> = Omit<TObj, `naughty_${string}`>;

test("Day Eight", () => {
  type SantasList = {
    naughty_tom: { address: "1 candy cane lane" };
    good_timmy: { address: "43 chocolate dr" };
    naughty_trash: { address: "637 starlight way" };
    naughty_candace: { address: "12 aurora" };
  };
  type test_wellBehaved_actual = RemoveNaughtyChildren<SantasList>;
  //   ^?
  type test_wellBehaved_expected = {
    good_timmy: { address: "43 chocolate dr" };
  };
  expectTypeOf<test_wellBehaved_actual>().toEqualTypeOf<test_wellBehaved_expected>();

  type Unrelated = {
    dont: "cheat";
    naughty_play: "fair";
  };
  type test_Unrelated_actual = RemoveNaughtyChildren<Unrelated>;
  //   ^?
  type test_Unrelated_expected = {
    dont: "cheat";
  };
  expectTypeOf<test_Unrelated_actual>().toEqualTypeOf<test_Unrelated_expected>();
});
