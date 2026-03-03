export default class Stats {
  private _str: number;
  private _vit: number;
  private _agi: number;
  private _int: number;

  constructor(str?: number, vit?: number, agi?: number, int?: number) {
    this._str = str ?? Math.floor(Math.random() * (10 - 1) + 1);
    this._vit = vit ?? Math.floor(Math.random() * (10 - 1) + 1);

    this._agi = agi ?? Math.floor(Math.random() * (10 - 1) + 1);
    this._int = int ?? Math.floor(Math.random() * (10 - 1) + 1);
  }

  get str() {
    return this._str;
  }
  get vit() {
    return this._vit;
  }
  get agi() {
    return this._agi;
  }
  get int() {
    return this._int;
  }

  set str(value: number) {
    this._str = value;
  }

  set vit(value: number) {
    this._vit = value;
  }
  set agi(value: number) {
    this._agi = value;
  }
  set int(value: number) {
    this._int = value;
  }
}
