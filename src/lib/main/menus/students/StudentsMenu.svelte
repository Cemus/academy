<script lang="ts">
  import type { Character } from "../../../../game/characters/models/Character";
  import type Game from "../../../../game/Game";
  import ButtonReturn from "../../../components/ButtonReturn.svelte";
  import Student from "./Student.svelte";
  import StudentDetails from "./StudentDetails.svelte";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();

  let dialogRef: StudentDetails | null = $state(null);
  let selectedStudent: Character | null = $state(null);

  const handleStudentSelection = (student: Character | null) => {
    if (selectedStudent && student) {
      selectedStudent = student.id === selectedStudent.id ? null : student;
      dialogRef?.close();
      return;
    }
    student ? dialogRef?.open() : dialogRef?.close();

    selectedStudent = student;
  };
</script>

<main>
  <h3>Students</h3>

  <section>
    {#if $game.academy.students.length === 0}
      <p class="no-student">No students available</p>
    {:else}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stats</th>
            <th>Rank</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each $game.academy.students as student}
            <Student
              {student}
              {handleStudentSelection}
              isSelected={selectedStudent?.id === student.id}
            />
          {/each}
        </tbody>
      </table>
    {/if}
  </section>

  <StudentDetails
    bind:this={dialogRef}
    student={selectedStudent}
    {handleStudentSelection}
  />
  <ButtonReturn {game} />
</main>

<!--
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
-->

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 1rem;
  }

  section {
    overflow: auto;
  }

  h3 {
    text-align: center;
  }

  tbody {
    overflow-y: auto;
    border: 1px solid #222;
    border-radius: 8px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: #1a1a1a;
    position: sticky;
    top: 0;
  }

  th {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #222;
  }

  .no-student {
    padding: 1rem;
    color: rgb(235, 26, 54);
    text-align: center;
  }
</style>
