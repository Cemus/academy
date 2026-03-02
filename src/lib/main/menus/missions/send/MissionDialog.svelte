<script lang="ts">
  import type Game from "../../../../../game/Game";
  import StudentList from "../StudentList.svelte";

  let dialogElement: HTMLDialogElement;

  interface Props {
    game: Game;
  }

  export function open() {
    dialogElement.showModal();
  }

  export function close() {
    dialogElement.close();
  }

  const { game }: Props = $props();
</script>

<dialog bind:this={dialogElement}>
  <StudentList students={game.academy.students} />
  <button type="button" onclick={() => close()}>Close</button>
</dialog>
