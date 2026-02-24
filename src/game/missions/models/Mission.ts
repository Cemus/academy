import type { Condition } from "./Condition";
import type { Reward } from "./Reward";
import type { RiskInfo } from "./Risk";

export interface Mission {
  name: string;
  expiresIn: number;
  duration: number;
  risks: RiskInfo[];
  conditions: Condition[];
  rewards: Reward[];
  expired: boolean;
}
