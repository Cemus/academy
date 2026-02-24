<script lang="ts">
  import type Game from "../game/Game";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();

  const nextDay = () => {
    game.engine.nextDay();
  };
</script>

<footer>
  <p>Day <span>{$game.time.day}</span></p>
  <button type="button" class="button-return" onclick={() => nextDay()}
    >Next day</button
  >
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-top: 2rem;
  }
</style>
