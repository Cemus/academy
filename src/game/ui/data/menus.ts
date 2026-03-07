import type { GameSnapshot } from "../../Game";
import type { Menu } from "../models/Menu";

export interface GameMenu {
  menu: Menu;
  text: string;
  subtitle: string;
  icon: string;
}

export const getMenuItems = (gameState: GameSnapshot): GameMenu[] => [
  {
    menu: "missions",
    text: "Missions",
    subtitle: `${gameState.missionBoard.missions.length} missions`,
    icon: "🗡️",
  },
  {
    menu: "students",
    text: "Students",
    subtitle: `${gameState.academy.students.length} students`,
    icon: "🧙‍♂️",
  },
  {
    menu: "academy",
    text: "Academy",
    subtitle: "",
    icon: "🏰",
  },
  {
    menu: "reports",
    text: "Reports",
    subtitle: "",
    icon: "📜",
  },
  {
    menu: "formation",
    text: "Formation",
    subtitle: "",
    icon: "📚",
  },
  {
    menu: "options",
    text: "Options",
    subtitle: "",
    icon: "⚙️",
  },
];
