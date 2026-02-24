<script lang="ts">
  import type { Component } from "svelte";
  import MainMenu from "./main/MainMenu.svelte";
  import AcademyMenu from "./main/menus/academy/AcademyMenu.svelte";
  import MissionsMenu from "./main/menus/missions/MissionsMenu.svelte";
  import OptionsMenu from "./main/menus/options/OptionsMenu.svelte";
  import ReportsMenu from "./main/menus/reports/ReportsMenu.svelte";
  import StudentsMenu from "./main/menus/students/StudentsMenu.svelte";
  import type Game from "../game/Game";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();

  const menuMap: Record<string, Component<Props, {}, "">> = {
    main: MainMenu,
    students: StudentsMenu,
    missions: MissionsMenu,
    academy: AcademyMenu,
    reports: ReportsMenu,
    options: OptionsMenu,
  };

  const Menu = $derived(menuMap[$game.ui.currentMenu]);
</script>

{#if Menu}
  <Menu {game} />
{/if}
