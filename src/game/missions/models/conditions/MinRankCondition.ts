import type { Character } from "../../../characters/models/Character";
import { Rank } from "../../../characters/models/Rank";
import { Condition, type ConditionResult } from "./Condition";

export class MinRankCondition extends Condition {
  constructor(public minRank: Rank) {
    super();
  }

  check(student: Character): ConditionResult {
    return student.rank >= this.minRank
      ? { valid: true }
      : { valid: false, reason: `The rank is below ${Rank[this.minRank]}` };
  }
}
