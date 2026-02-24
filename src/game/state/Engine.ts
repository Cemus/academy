import type GameState from "../Game";

export default class Engine {
  private emit: () => void;

  constructor(
    emit: () => void,
    private game: GameState,
  ) {
    this.emit = emit;
  }

  nextDay() {
    this.game.time.day++;

    this.updateMissions();
    this.resolveMissions();
    this.emit();
  }

  private updateMissions() {
    for (const mission of this.game.missionBoard.missions) {
      mission.expiresIn--;

      if (mission.expiresIn <= 0) {
        mission.expired = true;
      }
    }
  }

  private resolveMissions() {}
}
