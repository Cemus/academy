<script lang="ts">
  import type Game from "../../../../game/Game";
  import ButtonReturn from "../../../components/ButtonReturn.svelte";
  import Student from "./Student.svelte";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();
</script>

<main>
  <article>
    <h3>Students</h3>
    <ul>
      {#each $game.academy.students as student}
        <Student {student} />
      {/each}
    </ul>
  </article>

  <ButtonReturn {game} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  article {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.288);

    border-radius: 0.25rem;
    margin: 1rem;
  }

  h3 {
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    overflow: auto;
  }
</style>
