export const rank = ["E", "D", "C", "B", "A"] as const;
export type Rank = (typeof rank)[number];

export type Role = "student" | "teacher";
export interface Stats {
  str: number;
}
export interface Trait {
  name: string;
}

export interface Character {
  id: string;
  name: string;
  surname: string;
  role: Role;
  rank: Rank;
  stats: Stats;
  traits: Trait[];
}
