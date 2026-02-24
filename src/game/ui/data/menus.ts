import type { GameSnapshot } from "../../Game";
import type { Menu } from "../models/Menu";

export interface GameMenu {
  menu: Menu;
  text: string;
  subtitle: string;
  icon: string;
}

export const getMenuItems = (gameState: GameSnapshot): GameMenu[] => [
  { menu: "missions", text: "Missions", subtitle: "2 en cours", icon: "🗡️" },
  {
    menu: "students",
    text: "Students",
    subtitle: `${gameState.academy.students.length} students`,
    icon: "🧙‍♂️",
  },
  {
    menu: "academy",
    text: "Academy",
    subtitle: "Salle de magie rénovée",
    icon: "🏰",
  },
  {
    menu: "reports",
    text: "Reports",
    subtitle: "Dernier: Duel épique",
    icon: "📜",
  },
  {
    menu: "formation",
    text: "Formation",
    subtitle: "Cours en cours",
    icon: "📚",
  },
  {
    menu: "options",
    text: "Options",
    subtitle: "Configurer l’académie",
    icon: "⚙️",
  },
];
