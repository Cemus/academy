import { writable } from "svelte/store";
import UI from "./state/UI";
import PlayerAcademy from "./state/PlayerAcademy";
import Time from "./state/Time";
import World from "./state/World";
import MissionBoard from "./state/MissionBoard";
import Engine from "./state/Engine";

export type GameSnapshot = {
  ui: UI;
  academy: PlayerAcademy;
  world: World;
  time: Time;
  missionBoard: MissionBoard;
};

export default class Game {
  public ui: UI = new UI(this.emit.bind(this));
  public academy: PlayerAcademy = new PlayerAcademy(this.emit.bind(this));
  public world: World = new World(this.emit.bind(this));
  public time: Time = new Time(this.emit.bind(this));
  public missionBoard: MissionBoard = new MissionBoard(this.emit.bind(this));
  public engine: Engine = new Engine(this.emit.bind(this), this);

  private store = writable<GameSnapshot>(this.snapshot());
  subscribe = this.store.subscribe;

  private snapshot(): GameSnapshot {
    return {
      ui: this.ui,
      academy: this.academy,
      world: this.world,
      time: this.time,
      missionBoard: this.missionBoard,
    };
  }

  private emit() {
    this.store.set(this.snapshot());
  }
}
