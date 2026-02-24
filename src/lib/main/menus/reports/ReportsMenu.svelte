<script lang="ts">
  import type Game from "../../../../game/Game";
  import ButtonReturn from "../../../components/ButtonReturn.svelte";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();
</script>

<ButtonReturn {game} />
