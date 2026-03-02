import type { Rank } from "../../characters/models/Character";
import { type RiskName, type RiskInfo, riskNames } from "../models/Risk";

interface CreateRiskOptions {
  name?: RiskName;
  rank?: number;
}

export default class RiskFactory {
  static getRandomRiskName(): RiskName {
    const index = Math.floor(Math.random() * riskNames.length);
    return riskNames[index];
  }
  static createRisk({
    name = this.getRandomRiskName(),
    rank = Math.floor(Math.random() * (10 - 1) + 1),
  }: CreateRiskOptions = {}): RiskInfo {
    const probability = this.probabilityFromRank(rank);

    switch (name) {
      case "bandits":
        return {
          name,
          probability: probability,
          rank,
          effect: () => {
            console.log(`${rank} bandits attack the team!`);
          },
        };
      case "trap":
        return {
          name,
          probability: probability,
          rank,
          effect: () => console.log(`A rank ${rank} trap triggers!`),
        };
      case "wild_magic":
        return {
          name,
          probability: probability,
          rank,
          effect: () =>
            console.log(`A magical instability rank ${rank} strikes!`),
        };
    }
  }

  static probabilityFromRank(rank: number) {
    const min = 5;
    const max = 100;

    const normalized = (rank - 1) / 4;
    const base = min + (max - min) * normalized;

    const variance = base * 0.5;
    const value = base + (Math.random() + Math.random() - 1) * variance;
    return Math.round(Math.min(Math.max(value, 1), 100));
  }
}
