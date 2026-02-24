import RiskFactory from "../factories/RiskFactory";
import type { Mission } from "../models/Mission";

export const missionsList: Mission[] = [
  {
    name: "Mission test",
    expiresIn: 2,
    duration: 3,
    risks: [RiskFactory.createRisk()],
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
  },
];
