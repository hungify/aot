import { expectTypeOf, test } from "vitest";

type Count<Arr, S, R extends any[] = []> = Arr extends [
  infer TFist,
  ...infer TRest
]
  ? TFist extends S
    ? Count<TRest, S, [S, ...R]>
    : Count<TRest, S, R>
  : R["length"];

test("Day Eighteen", () => {
  type ToySack = [
    "🎸",
    "🎧",
    "👟",
    "👟",
    "💻",
    "🪀",
    "🧩",
    "🎮",
    "🎨",
    "🕹️",
    "📱",
    "🧩",
    "🧸",
    "🎧",
    "👟",
    "🚲",
    "📚",
    "⌚",
    "🎨",
    "👟",
    "🎸",
    "🧸",
    "👟",
    "🎸",
    "📱",
    "🎧",
    "🎮",
    "🎒",
    "📱",
    "🧩",
    "🧩",
    "🚲",
    "🕹️",
    "🧵",
    "📱",
    "🕹️",
    "🕰️",
    "🧢",
    "🕹️",
    "👟",
    "🧸",
    "📚",
    "🧁",
    "🧩",
    "🎸",
    "🎮",
    "🧁",
    "📚",
    "💻",
    "⌚",
    "🛹",
    "🧁",
    "🧣",
    "🪁",
    "🎸",
    "🧸",
    "🧸",
    "🧸",
    "🧩",
    "🪁",
    "🏎️",
    "🏎️",
    "🧁",
    "📚",
    "🧸",
    "🕶️",
    "💻",
    "⌚",
    "⌚",
    "🕶️",
    "🎧",
    "🎧",
    "🎧",
    "💻",
    "👟",
    "🎸",
    "💻",
    "🪐",
    "📚",
    "🎨",
    "📱",
    "🎧",
    "📱",
    "🎸",
    "🏎️",
    "👟",
    "🚲",
    "📱",
    "🚲",
    "🎸"
  ];

  type test_0_actual = Count<ToySack, "👟">;
  //   ^?
  type test_0_expected = 8;
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual = Count<ToySack, "🧦">;
  //   ^?
  type test_1_expected = 0;
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual = Count<ToySack, "🧩">;
  //   ^?
  type test_2_expected = 6;
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual = Count<ToySack, "🛹">;
  //   ^?
  type test_3_expected = 1;
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();

  type test_4_actual = Count<ToySack, "🏎️">;
  //   ^?
  type test_4_expected = 3;
  expectTypeOf<test_4_actual>().toEqualTypeOf<test_4_expected>();

  type test_5_actual = Count<ToySack, "📚">;
  //   ^?
  type test_5_expected = 5;
  expectTypeOf<test_5_actual>().toEqualTypeOf<test_5_expected>();
});
