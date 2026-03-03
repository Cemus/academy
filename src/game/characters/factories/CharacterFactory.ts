import type { Character } from "../models/Character";
import { Rank } from "../models/Rank";
import Stats from "../models/Stats";
import type { Trait } from "../models/Trait";

export default class CharacterFactory {
  private static prefixes = [
    "A",
    "An",
    "Ba",
    "Bis",
    "Cy",
    "Clo",
    "Du",
    "E",
    "Fa",
  ];
  private static radicals = ["", "n", "r", "on", "ki"];
  private static suffixes = [
    "yen",
    "yon",
    "an",
    "in",
    "lia",
    "dette",
    "lette",
    "o",
    "ei",
  ];
  private static rng: () => number = Math.random;

  static createStudent(): Character {
    return {
      id: crypto.randomUUID(),
      name: this.generateRandomName(),
      surname: this.generateRandomName(),
      role: "student",
      rank: Rank["E"],
      stats: new Stats(),
      traits: this.generateInitialTraits(),
      isOnMission: false,
    };
  }

  static generateInitialTraits(): Trait[] {
    return [{ name: "^^" }];
  }

  static generateRandomName(): string {
    return (
      this.pick(this.prefixes) +
      this.pick(this.radicals) +
      this.pick(this.suffixes)
    );
  }

  private static pick<T>(array: T[]): T {
    return array[Math.floor(this.rng() * array.length)];
  }

  static setRng(rng: () => number) {
    this.rng = rng;
  }
}
