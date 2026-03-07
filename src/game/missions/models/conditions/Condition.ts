import type { Character } from "../../../characters/models/Character";

export interface ConditionResult {
  valid: boolean;
  reason?: string;
}

export abstract class Condition {
  abstract check(student: Character): ConditionResult;
}
