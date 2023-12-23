import { expectTypeOf, test } from "vitest";

type CookieSurveyInput<TCookie> = keyof TCookie;

test("Day Two", () => {
  const cookieInventory = {
    chocolate: 1,
    sugar: 20,
    gingerBread: 10,
    peanutButter: 30,
    snickeDoodle: 73,
  };
  type test_cookies_actual = CookieSurveyInput<typeof cookieInventory>;
  //   ^?
  type test_cookies_expected =
    | "chocolate"
    | "sugar"
    | "gingerBread"
    | "peanutButter"
    | "snickeDoodle";

  expectTypeOf<test_cookies_actual>().toEqualTypeOf<test_cookies_expected>();

  const unrelated = {
    hi: 1,
    hi2: 1,
    hi3: 1,
    hi4: 1,
    hi5: 1,
    hi6: 1,
    hi7: 1,
  };
  type test_unrelated_actual = CookieSurveyInput<typeof unrelated>;
  type test_unrealted_expected =
    | "hi"
    | "hi2"
    | "hi3"
    | "hi4"
    | "hi5"
    | "hi6"
    | "hi7";

  expectTypeOf<test_unrelated_actual>().toEqualTypeOf<test_unrealted_expected>();
});
