import type { Character } from "../../../characters/models/Character";
import { Rank } from "../../../characters/models/Rank";
import { Condition, type ConditionResult } from "./Condition";

export class MaxRankCondition extends Condition {
  constructor(public maxRank: Rank) {
    super();
  }

  check(student: Character): ConditionResult {
    return student.rank <= this.maxRank
      ? { valid: true }
      : { valid: false, reason: `The rank exceed ${Rank[this.maxRank]}` };
  }
}
