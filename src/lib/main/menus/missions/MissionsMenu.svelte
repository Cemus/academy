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
  <ul class="missions-container">
    {#each $game.missionBoard.missions as mission}
      <Mission {mission} {game} />
    {/each}
  </ul>

  <button type="button" class="button-return" onclick={() => toMainMenu()}>
    Back
  </button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .missions-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    padding: 0;
    padding-bottom: 1rem;
    scroll-behavior: smooth;
    width: 100%;
    overflow-y: hidden;
    align-items: stretch;
  }

  .missions-container::-webkit-scrollbar {
    height: 12px;
  }

  .missions-container::-webkit-scrollbar:hover {
    height: 12px;
  }

  .missions-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    cursor: pointer;
  }

  .missions-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  .missions-container::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 500px) {
    .missions-container {
      flex-direction: column;
      align-items: center;
      overflow: auto;
    }
  }
</style>
