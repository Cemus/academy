<script lang="ts">
  import type { Character } from "../../../../game/characters/models/Character";

  interface Props {
    students: Character[];
  }

  const { students }: Props = $props();
</script>

<div>
  <table>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Stats</th>
        <th scope="col">Rank</th>
      </tr>
    </thead>
    <tbody>
      {#each students as student}
        <tr>
          <th scope="row">{student.name}</th>
          <td></td>
          <td>{student.rank}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
