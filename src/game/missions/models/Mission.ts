import type { Character } from "../../characters/models/Character";
import type { Condition, ConditionResult } from "./conditions/Condition";
import type { Reward } from "./Reward";
import type { RiskInfo } from "./Risk";

export enum MissionType {
  patrol = "patrol",
  scout = "scout",
  assault = "assault",
  delivery = "delivery",
  escort = "escort",
}

export class Mission {
  private _name: string;
  private _expiresIn: number;
  private _duration: number;
  private _type: MissionType;
  private _description: string;
  private _risks: RiskInfo[];
  private _conditions: Condition[];
  private _rewards: Reward[];
  private _expired: boolean;

  constructor(
    name: string,
    expiresIn: number,
    duration: number,
    type: MissionType,
    description: string,
    risks: RiskInfo[],
    conditions: Condition[],
    rewards: Reward[],
    expired: boolean,
  ) {
    this._name = name;
    this._expiresIn = expiresIn;
    this._duration = duration;
    this._type = type;
    this._description = description;
    this._risks = risks;
    this._conditions = conditions;
    this._rewards = rewards;
    this._expired = expired;
  }

  checkStudentConditions(student: Character): ConditionResult[] {
    return this.conditions.map((c) => c.check(student));
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter expiresIn
   * @return {number}
   */
  public get expiresIn(): number {
    return this._expiresIn;
  }

  /**
   * Getter duration
   * @return {number}
   */
  public get duration(): number {
    return this._duration;
  }

  /**
   * Getter type
   * @return {MissionType}
   */
  public get type(): MissionType {
    return this._type;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter risks
   * @return {RiskInfo[]}
   */
  public get risks(): RiskInfo[] {
    return this._risks;
  }

  /**
   * Getter conditions
   * @return {Condition[]}
   */
  public get conditions(): Condition[] {
    return this._conditions;
  }

  /**
   * Getter rewards
   * @return {Reward[]}
   */
  public get rewards(): Reward[] {
    return this._rewards;
  }

  /**
   * Getter expired
   * @return {boolean}
   */
  public get expired(): boolean {
    return this._expired;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter expiresIn
   * @param {number} value
   */
  public set expiresIn(value: number) {
    this._expiresIn = value;
  }

  /**
   * Setter duration
   * @param {number} value
   */
  public set duration(value: number) {
    this._duration = value;
  }

  /**
   * Setter type
   * @param {MissionType} value
   */
  public set type(value: MissionType) {
    this._type = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter risks
   * @param {RiskInfo[]} value
   */
  public set risks(value: RiskInfo[]) {
    this._risks = value;
  }

  /**
   * Setter conditions
   * @param {Condition[]} value
   */
  public set conditions(value: Condition[]) {
    this._conditions = value;
  }

  /**
   * Setter rewards
   * @param {Reward[]} value
   */
  public set rewards(value: Reward[]) {
    this._rewards = value;
  }

  /**
   * Setter expired
   * @param {boolean} value
   */
  public set expired(value: boolean) {
    this._expired = value;
  }
}
