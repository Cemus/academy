export enum Rank {
  E = 1,
  D = 2,
  C = 3,
  B = 4,
  A = 5,
}

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
