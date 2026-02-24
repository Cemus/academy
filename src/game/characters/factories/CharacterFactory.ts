import type { Character, Stats, Trait } from "../characters/models/Character";

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
      rank: "E",
      stats: this.generateBaseStats(),
      traits: this.generateInitialTraits(),
    };
  }

  static generateBaseStats(): Stats {
    return {
      str: 1,
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
