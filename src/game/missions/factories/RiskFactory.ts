import { type RiskName, type RiskInfo, riskNames } from "../models/Risk";

interface CreateRiskOptions {
  name?: RiskName;
  level?: number;
  probability?: number;
}

export default class RiskFactory {
  static getRandomRiskName(): RiskName {
    const index = Math.floor(Math.random() * riskNames.length);
    return riskNames[index];
  }
  static createRisk({
    name = this.getRandomRiskName(),
    level = Math.floor(Math.random() * (10 - 1) + 1),
    probability = 5,
  }: CreateRiskOptions = {}): RiskInfo {
    switch (name) {
      case "bandits":
        return {
          name,
          probability: probability * level,
          level,
          effect: () => {
            console.log(`${level} bandits attack the team!`);
          },
        };
      case "trap":
        return {
          name,
          probability: probability * level,
          level,
          effect: () => console.log(`A level ${level} trap triggers!`),
        };
      case "wild_magic":
        return {
          name,
          probability: probability * level,
          level,
          effect: () =>
            console.log(`A magical instability level ${level} strikes!`),
        };
    }
  }
}
