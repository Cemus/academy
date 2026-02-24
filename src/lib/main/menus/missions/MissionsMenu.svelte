<script lang="ts">
  import type Game from "../../../../game/Game";
  import type GameState from "../../../../game/Game";
  import Mission from "./Mission.svelte";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();

  const toMainMenu = () => {
    game.ui.currentMenu = "main";
    history.pushState("main", "", `/${"main"}`);
    console.log(history);
  };
</script>

<main>
  <h3>Mission board</h3>
  <ul>
    {#each $game.missionBoard.missions as mission}
      <Mission {mission} />
    {/each}
  </ul>

  <button type="button" class="button-return" onclick={() => toMainMenu()}
    >Back</button
  >
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }
</style>
