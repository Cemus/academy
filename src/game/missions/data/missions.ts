import { Rank } from "../../characters/models/Character";
import MissionFactory from "../factories/MissionFactory";
import type { Mission } from "../models/Mission";

export const missionsList: Mission[] = [
  MissionFactory.createMission(Rank.E),
  MissionFactory.createMission(Rank.E),
  MissionFactory.createMission(Rank.D),
  MissionFactory.createMission(Rank.D),
  MissionFactory.createMission(Rank.C),
  MissionFactory.createMission(Rank.B),
  MissionFactory.createMission(Rank.A),
];
