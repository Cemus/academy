import type { Character } from "../../../characters/models/Character";
import type { Trait } from "../../../characters/models/Trait";
import { Condition, type ConditionResult } from "./Condition";

export class HasTraitCondition extends Condition {
  constructor(public trait: Trait) {
    super();
  }

  check(student: Character): ConditionResult {
    return student.traits.includes(this.trait)
      ? { valid: true }
      : { valid: false, reason: `Doesn't have the trait '${this.trait}` };
  }
}
