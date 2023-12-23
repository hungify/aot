import { expectTypeOf, test } from "vitest";

type SantasFavoriteCookies = "ginger-bread" | "chocolate-chip";

test("Day One", () => {
  type test_0_actual = SantasFavoriteCookies;
  type test_0_expected = "ginger-bread" | "chocolate-chip";

  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();
});
