import type { Condition } from "./Condition";
import type { Reward } from "./Reward";
import type { RiskInfo } from "./Risk";

export enum MissionType {
  patrol = "patrol",
  scout = "scout",
  assault = "assault",
  delivery = "delivery",
  escort = "escort",
}

/* export type MissionType =
  | "patrol"
  | "scout"
  | "assault"
  | "delivery"
  | "escort"; */

export interface Mission {
  name: string;
  expiresIn: number;
  duration: number;
  type: MissionType;
  description: string;
  risks: RiskInfo[];
  conditions: Condition[];
  rewards: Reward[];
  expired: boolean;
}
