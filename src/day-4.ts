import { expectTypeOf, test } from "vitest";

type Address = { address: string; city: string };
// type PresentDeliveryList<TPerson> = Record<keyof TPerson, Address>
type PresentDeliveryList<TPerson> = {
  [K in keyof TPerson]: Address;
};

test("Day Four", () => {
  type MixedBehaviorList = {
    john: { behavior: "good" };
    jimmy: { behavior: "bad" };
    sara: { behavior: "good" };
    suzy: { behavior: "good" };
    chris: { behavior: "good" };
    penny: { behavior: "bad" };
  };
  type test_MixedBehaviorTest_actual = PresentDeliveryList<MixedBehaviorList>;
  //   ^?
  type test_MixedBehaviorTest_expected = {
    john: Address;
    jimmy: Address;
    sara: Address;
    suzy: Address;
    chris: Address;
    penny: Address;
  };
  expectTypeOf<test_MixedBehaviorTest_actual>().toEqualTypeOf<test_MixedBehaviorTest_expected>();

  type Unrelated = {
    hello: { hello: "hello" };
    world: { world: "world" };
  };
  type test_Unrelated_actual = PresentDeliveryList<Unrelated>;
  //   ^?
  type test_Unrelated_expected = {
    hello: Address;
    world: Address;
  };

  expectTypeOf<test_Unrelated_actual>().toEqualTypeOf<test_Unrelated_expected>();
});
