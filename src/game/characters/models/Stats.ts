export default class Stats {
  private str: number;
  private vit: number;
  private agi: number;
  private int: number;

  constructor(str?: number, vit?: number, agi?: number, int?: number) {
    this.str = str ?? Math.floor(Math.random() * (10 - 1) + 1);
    this.vit = vit ?? Math.floor(Math.random() * (10 - 1) + 1);
    this.agi = agi ?? Math.floor(Math.random() * (10 - 1) + 1);
    this.int = int ?? Math.floor(Math.random() * (10 - 1) + 1);
  }
}
