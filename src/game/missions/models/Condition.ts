export interface Condition {
  type:
    | "statAbove"
    | "hasTrait"
    | "randomChance"
    | "minRank"
    | "maxRank"
    | "teamSize";
  params: any;
}
