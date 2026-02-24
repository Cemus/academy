export default class UI {
  private emit: () => void;
  private _day: number = 1;

  constructor(emit: () => void) {
    this.emit = emit;
  }

  public set day(day: number) {
    this._day = day;
    this.emit();
  }

  public get day() {
    return this._day;
  }
}
