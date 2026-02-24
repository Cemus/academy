export const riskNames = ["bandits", "trap", "wild_magic"] as const;

export type RiskName = (typeof riskNames)[number];

export interface RiskInfo {
  name: RiskName;
  probability: number;
  level: number;
  effect: () => void;
}
