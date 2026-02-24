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
