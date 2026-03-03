import type { Rank } from "./Rank";
import type { Role } from "./Role";
import type Stats from "./Stats";
import type { Trait } from "./Trait";

export interface Character {
  id: string;
  name: string;
  surname: string;
  role: Role;
  rank: Rank;
  stats: Stats;
  traits: Trait[];
  isOnMission: boolean;
}
