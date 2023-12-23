import { expectTypeOf, test } from "vitest";

type GiftWrapper<TPresent, TFrom, TTo> = {
  present: TPresent;
  from: TFrom;
  to: TTo;
};

test("Day Three", () => {
  type test_SantaToTrash_actual = GiftWrapper<"Car", "Santa", "Trash">;
  //   ^?
  type test_SantaToTrash_expected = {
    present: "Car";
    from: "Santa";
    to: "Trash";
  };

  expectTypeOf<test_SantaToTrash_actual>().toEqualTypeOf<test_SantaToTrash_expected>();

  type test_TrashToPrime_actual = GiftWrapper<"vscode", "Trash", "Prime">;
  //   ^?
  type test_TrashToPrime_expected = {
    present: "vscode";
    from: "Trash";
    to: "Prime";
  };

  expectTypeOf<test_TrashToPrime_actual>().toEqualTypeOf<test_TrashToPrime_expected>();

  type test_DanToEvan_actual = GiftWrapper<"javascript", "Dan", "Evan">;
  //   ^?
  type test_DanToEvan_expected = {
    present: "javascript";
    from: "Dan";
    to: "Evan";
  };

  expectTypeOf<test_DanToEvan_actual>().toEqualTypeOf<test_DanToEvan_expected>();
});
