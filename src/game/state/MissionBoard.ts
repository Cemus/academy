import { missionsList } from "../missions/data/missions";
import type { Mission } from "../missions/models/Mission";

export default class MissionBoard {
  private emit: () => void;
  missions: Mission[] = missionsList;

  constructor(emit: () => void) {
    this.emit = emit;
  }
}
