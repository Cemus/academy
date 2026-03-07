<script lang="ts">
  import type Game from "../../game/Game";

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

<button type="button" class="button-return" onclick={() => toMainMenu()}
  >Back</button
>

<style>
  .button-return {
    position: sticky;
    cursor: pointer;
    background-color: rgb(179, 20, 47);
    border: solid 1px transparent;
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    align-self: center;
  }
  .button-return:hover {
    border: solid 1px aliceblue;
  }
</style>
