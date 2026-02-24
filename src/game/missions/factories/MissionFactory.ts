import type { Mission } from "../models/Mission";
import RiskFactory from "./RiskFactory";

export default class MissionFactory {
  static createMission(rank = 1): Mission {
    return {
      name: "Mission test",
      expiresIn: 2,
      duration: 3,
      risks: [RiskFactory.createRisk({ level: rank })],
      conditions: [
        {
          type: "minRank",
          params: "E",
        },
      ],
      rewards: [
        {
          name: "reputation",
          effect: function (): void {
            throw new Error("Function not implemented.");
          },
        },
      ],
      expired: false,
    };
  }
}
