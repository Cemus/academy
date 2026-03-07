import { Rank } from "../../characters/models/Rank";
import type { Condition } from "../models/conditions/Condition";
import { MaxRankCondition } from "../models/conditions/MaxRankCondition";
import { MinRankCondition } from "../models/conditions/MinRankCondition";
import { Mission, MissionType } from "../models/Mission";
import type { Reward } from "../models/Reward";
import type { RiskName } from "../models/Risk";
import RiskFactory from "./RiskFactory";

type MissionTemplate = {
  names: string[];
  risks: RiskName[];
};

const rewardTypes: Record<Rank, string[]> = {
  [Rank.E]: ["reputation", "gold"],
  [Rank.D]: ["reputation", "gold", "item"],
  [Rank.C]: ["reputation", "gold", "item"],
  [Rank.B]: ["reputation", "rare item", "gold"],
  [Rank.A]: ["reputation", "legendary item", "gold"],
};

const missionCatalog: Record<MissionType, MissionTemplate> = {
  patrol: {
    names: ["Easy Patrol", "Village Watch", "Border Patrol"],
    risks: ["bandits"],
  },

  scout: {
    names: ["Scout Area", "Deep Recon"],
    risks: ["trap", "wild_magic"],
  },

  assault: {
    names: ["Bandit Camp Raid", "Fort Assault"],
    risks: ["wild_magic"],
  },

  delivery: {
    names: ["Supply Run", "Find Item"],
    risks: ["bandits"],
  },

  escort: {
    names: ["Merchant Escort", "Guard Caravan"],
    risks: ["bandits", "trap"],
  },
};

export default class MissionFactory {
  static createMission(rank?: Rank): Mission {
    if (!rank) {
      rank = this.getRandomRank();
    }

    const type = this.getRandomMissionType();

    const template: MissionTemplate = missionCatalog[type];

    const name =
      template.names[Math.floor(Math.random() * template.names.length)];

    const risks = template.risks.map((risk) =>
      RiskFactory.createRisk({
        name: risk,
        rank: rank,
      }),
    );

    const conditions = this.getRandomConditions(type, rank);
    const rewards: Reward[] = this.getRandomRewards(type, rank);

    return new Mission(
      name,
      1 + Math.floor(Math.random() * 5),
      1 + Math.floor(Math.random() * 3),
      type,
      "",
      risks,
      conditions,
      rewards,
      false,
    );
  }

  static getRandomMissionType(): MissionType {
    const values = Object.values(MissionType);
    return values[Math.floor(Math.random() * values.length)];
  }

  static getRandomRank(): Rank {
    return Math.floor(Math.random() * (Object.values(Rank).length - 1) + 1);
  }

  static getRandomConditions(type: MissionType, rank: Rank): Condition[] {
    const conditions: Condition[] = [];

    conditions.push(new MinRankCondition(rank));

    if (Math.random() > 0.9) {
      conditions.push(new MaxRankCondition(rank));
    }

    switch (type) {
      case MissionType.assault:
        break;
    }

    return conditions;
  }

  static getRandomRewards(type: MissionType, rank: Rank): Reward[] {
    const rewards: Reward[] = [];

    const rewardNames = rewardTypes[rank];

    rewardNames.forEach((rewardName) => {
      switch (rewardName) {
        case "reputation":
          {
            const min = 5 * rank * 0.75;
            const max = 5 * rank * 1.25;

            rewards.push({
              name: "reputation",
              params: { value: Math.floor(Math.random() * (max - min) + min) },
            });
          }
          break;

        case "gold":
          {
            const min = rank * 10 * Math.exp(Math.sqrt(rank)) * 0.75;
            const max = rank * 10 * Math.exp(Math.sqrt(rank)) * 1.25;

            rewards.push({
              name: "gold",
              params: { value: Math.floor(Math.random() * (max - min) + min) },
            });
          }
          break;
      }
    });

    return rewards;
  }
}
