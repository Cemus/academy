import type { ConditionResult } from "../../missions/models/conditions/Condition";
import type { Mission } from "../../missions/models/Mission";
import type { Rank } from "./Rank";
import type { Role } from "./Role";
import type Stats from "./Stats";
import type { Trait } from "./Trait";

export class Character {
  private _id: string = crypto.randomUUID();
  private _name: string;
  private _surname: string;
  private _role: Role;
  private _rank: Rank;
  private _stats: Stats;
  private _traits: Trait[];
  private _currentMission: Mission | null = null;

  constructor(
    name: string,
    surname: string,
    role: Role,
    rank: Rank,
    stats: Stats,
    traits: Trait[],
  ) {
    this._name = name;
    this._surname = surname;
    this._role = role;
    this._rank = rank;
    this._stats = stats;
    this._traits = traits;
  }

  getAvailability(): ConditionResult {
    if (this.currentMission) {
      return { valid: false, reason: "Is on mission" };
    }

    return { valid: true };
  }

  getMissionConditionsResults(mission: Mission): ConditionResult[] {
    return [this.getAvailability(), ...mission.checkStudentConditions(this)];
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter surname
   * @return {string}
   */
  public get surname(): string {
    return this._surname;
  }

  /**
   * Getter role
   * @return {Role}
   */
  public get role(): Role {
    return this._role;
  }

  /**
   * Getter rank
   * @return {Rank}
   */
  public get rank(): Rank {
    return this._rank;
  }

  /**
   * Getter stats
   * @return {Stats}
   */
  public get stats(): Stats {
    return this._stats;
  }

  /**
   * Getter traits
   * @return {Trait[]}
   */
  public get traits(): Trait[] {
    return this._traits;
  }

  /**
   * Getter currentMission
   * @return {boolean}
   */
  public get currentMission(): Mission | null {
    return this._currentMission;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter surname
   * @param {string} value
   */
  public set surname(value: string) {
    this._surname = value;
  }

  /**
   * Setter role
   * @param {Role} value
   */
  public set role(value: Role) {
    this._role = value;
  }

  /**
   * Setter rank
   * @param {Rank} value
   */
  public set rank(value: Rank) {
    this._rank = value;
  }

  /**
   * Setter stats
   * @param {Stats} value
   */
  public set stats(value: Stats) {
    this._stats = value;
  }

  /**
   * Setter traits
   * @param {Trait[]} value
   */
  public set traits(value: Trait[]) {
    this._traits = value;
  }

  /**
   * Setter currentMission
   * @param {boolean} value
   */
  public set currentMission(value: Mission | null) {
    this._currentMission = value;
  }
}
