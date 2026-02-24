export default class World {
  private emit: () => void;

  constructor(emit: () => void) {
    this.emit = emit;
  }
}
