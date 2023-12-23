import { expectTypeOf, test } from "vitest";

type Letters = {
  A: ["█▀█ ", "█▀█ ", "▀ ▀ "];
  B: ["█▀▄ ", "█▀▄ ", "▀▀  "];
  C: ["█▀▀ ", "█ ░░", "▀▀▀ "];
  E: ["█▀▀ ", "█▀▀ ", "▀▀▀ "];
  H: ["█ █ ", "█▀█ ", "▀ ▀ "];
  I: ["█ ", "█ ", "▀ "];
  M: ["█▄░▄█ ", "█ ▀ █ ", "▀ ░░▀ "];
  N: ["█▄░█ ", "█ ▀█ ", "▀ ░▀ "];
  P: ["█▀█ ", "█▀▀ ", "▀ ░░"];
  R: ["█▀█ ", "██▀ ", "▀ ▀ "];
  S: ["█▀▀ ", "▀▀█ ", "▀▀▀ "];
  T: ["▀█▀ ", "░█ ░", "░▀ ░"];
  Y: ["█ █ ", "▀█▀ ", "░▀ ░"];
  W: ["█ ░░█ ", "█▄▀▄█ ", "▀ ░ ▀ "];
  " ": ["░", "░", "░"];
  ":": ["#", "░", "#"];
  "*": ["░", "#", "░"];
};

type ToAsciiArtLine<
  Text extends string,
  Result extends string[] = ["", "", ""]
> = Text extends `${infer FirstChar extends keyof Letters}${infer Rest}`
  ? ToAsciiArtLine<
      Rest,
      [
        `${Result[0]}${Letters[FirstChar][0]}`,
        `${Result[1]}${Letters[FirstChar][1]}`,
        `${Result[2]}${Letters[FirstChar][2]}`
      ]
    >
  : Result;

type ToAsciiArt<
  Text extends string,
  Result extends string[] = []
> = Text extends `${infer FirstLine}\n${infer Rest}`
  ? ToAsciiArt<Rest, [...Result, ...ToAsciiArtLine<Uppercase<FirstLine>>]>
  : [...Result, ...ToAsciiArtLine<Uppercase<Text>>];

test("Day Twenty", () => {
  type test_0_actual = ToAsciiArt<"   * : * Merry * : *   \n  Christmas  ">;
  //   ^?
  type test_0_expected = [
    "░░░░░#░░░█▄░▄█ █▀▀ █▀█ █▀█ █ █ ░░░#░░░░░",
    "░░░#░░░#░█ ▀ █ █▀▀ ██▀ ██▀ ▀█▀ ░#░░░#░░░",
    "░░░░░#░░░▀ ░░▀ ▀▀▀ ▀ ▀ ▀ ▀ ░▀ ░░░░#░░░░░",
    "░░█▀▀ █ █ █▀█ █ █▀▀ ▀█▀ █▄░▄█ █▀█ █▀▀ ░░",
    "░░█ ░░█▀█ ██▀ █ ▀▀█ ░█ ░█ ▀ █ █▀█ ▀▀█ ░░",
    "░░▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ░▀ ░▀ ░░▀ ▀ ▀ ▀▀▀ ░░"
  ];
  expectTypeOf<test_0_actual>().toEqualTypeOf<test_0_expected>();

  type test_1_actual =
    ToAsciiArt<"  Happy new  \n  * : * : * Year * : * : *  ">;
  //   ^?
  type test_1_expected = [
    "░░█ █ █▀█ █▀█ █▀█ █ █ ░█▄░█ █▀▀ █ ░░█ ░░",
    "░░█▀█ █▀█ █▀▀ █▀▀ ▀█▀ ░█ ▀█ █▀▀ █▄▀▄█ ░░",
    "░░▀ ▀ ▀ ▀ ▀ ░░▀ ░░░▀ ░░▀ ░▀ ▀▀▀ ▀ ░ ▀ ░░",
    "░░░░#░░░#░░░█ █ █▀▀ █▀█ █▀█ ░░░#░░░#░░░░",
    "░░#░░░#░░░#░▀█▀ █▀▀ █▀█ ██▀ ░#░░░#░░░#░░",
    "░░░░#░░░#░░░░▀ ░▀▀▀ ▀ ▀ ▀ ▀ ░░░#░░░#░░░░"
  ];
  expectTypeOf<test_1_actual>().toEqualTypeOf<test_1_expected>();

  type test_2_actual =
    ToAsciiArt<"  * : * : * : * : * : * \n  Trash  \n  * : * : * : * : * : * ">;
  //   ^?
  type test_2_expected = [
    "░░░░#░░░#░░░#░░░#░░░#░░░",
    "░░#░░░#░░░#░░░#░░░#░░░#░",
    "░░░░#░░░#░░░#░░░#░░░#░░░",
    "░░▀█▀ █▀█ █▀█ █▀▀ █ █ ░░",
    "░░░█ ░██▀ █▀█ ▀▀█ █▀█ ░░",
    "░░░▀ ░▀ ▀ ▀ ▀ ▀▀▀ ▀ ▀ ░░",
    "░░░░#░░░#░░░#░░░#░░░#░░░",
    "░░#░░░#░░░#░░░#░░░#░░░#░",
    "░░░░#░░░#░░░#░░░#░░░#░░░"
  ];
  expectTypeOf<test_2_actual>().toEqualTypeOf<test_2_expected>();

  type test_3_actual =
    ToAsciiArt<"  : * : * : * : * : * : * : \n  Ecyrbe  \n  : * : * : * : * : * : * : ">;
  //   ^?
  type test_3_expected = [
    "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
    "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
    "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
    "░░█▀▀ █▀▀ █ █ █▀█ █▀▄ █▀▀ ░░",
    "░░█▀▀ █ ░░▀█▀ ██▀ █▀▄ █▀▀ ░░",
    "░░▀▀▀ ▀▀▀ ░▀ ░▀ ▀ ▀▀  ▀▀▀ ░░",
    "░░#░░░#░░░#░░░#░░░#░░░#░░░#░",
    "░░░░#░░░#░░░#░░░#░░░#░░░#░░░",
    "░░#░░░#░░░#░░░#░░░#░░░#░░░#░"
  ];
  expectTypeOf<test_3_actual>().toEqualTypeOf<test_3_expected>();
});
