import type { Character } from "../../../characters/models/Character";
import { Condition, type ConditionResult } from "./Condition";

export class StatAboveCondition extends Condition {
  constructor(
    private stat: keyof Character["stats"],
    private value: number,
  ) {
    super();
  }

  check(student: Character): ConditionResult {
    return student.stats[this.stat] >= this.value
      ? { valid: true }
      : { valid: false, reason: `${this.stat} is below ${this.value}` };
  }
}
