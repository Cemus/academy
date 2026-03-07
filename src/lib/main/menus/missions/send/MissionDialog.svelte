<script lang="ts">
  import type { Character } from "../../../../../game/characters/models/Character";
  import type Game from "../../../../../game/Game";
  import type { Mission } from "../../../../../game/missions/models/Mission";
  import StudentList from "./StudentList.svelte";

  interface Props {
    game: Game;
    mission: Mission;
  }

  const { game, mission }: Props = $props();

  let dialogElement: HTMLDialogElement;

  export function open() {
    dialogElement.showModal();
  }

  export function close() {
    sendStudentsList = [];
    dialogElement.close();
  }

  const students = $game.academy.students;

  let sendStudentsList: Character[] = $state([]);

  const isSelected = (student: Character) =>
    sendStudentsList.some((s) => s.id === student.id);

  const toggleStudent = (student: Character) => {
    if (isSelected(student)) {
      sendStudentsList = sendStudentsList.filter((s) => s.id !== student.id);
    } else {
      sendStudentsList = [...sendStudentsList, student];
    }
  };

  const acceptMission = (studentList: Character[]) => {
    $game.academy.sendStudentsOnMission(studentList, mission);
    close();
  };
</script>

<dialog bind:this={dialogElement} class="mission-dialog">
  <div class="dialog-content">
    <header class="dialog-header">
      <div>
        <h2>{mission.name}</h2>
        <div class="mission-meta">
          <span>Duration: {mission.duration}d</span>
        </div>
      </div>
    </header>

    <section class="mission-risks">
      <h4>Mission Risks</h4>
      <ul>
        {#each mission.risks as risk}
          <li>
            <span class="risk-name">{risk.name}</span>
            <span class="risk-stat"></span>
          </li>
        {/each}
      </ul>
    </section>

    <section class="students-section">
      {#if students.length === 0}
        <p class="no-student">No students available</p>
      {:else}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stats</th>
              <th>Rank</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <StudentList {students} {isSelected} {toggleStudent} {mission} />
          </tbody>
        </table>
      {/if}
    </section>

    <footer class="dialog-footer">
      <div class="selection-info">
        {sendStudentsList.length} selected
      </div>

      <div class="actions">
        <button type="button" onclick={() => close()}> Cancel </button>

        <button
          type="button"
          class="primary"
          onclick={() => acceptMission(sendStudentsList)}
          disabled={sendStudentsList.length === 0}
        >
          Send on Mission
        </button>
      </div>
    </footer>
  </div>
</dialog>

<style>
  h4 {
    padding: 0;
    margin-top: 0;
  }
  .mission-dialog {
    width: 800px;
    max-width: 95vw;
    border: none;
    border-radius: 12px;
    padding: 0;
  }

  .dialog-content {
    display: flex;
    flex-direction: column;
    max-height: 85vh;
    padding: 24px;
    gap: 20px;
  }

  .dialog-header h2 {
    margin: 0;
  }

  .mission-meta {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  .mission-risks {
    background: #111;
    padding: 12px;
    border-radius: 8px;
  }

  .mission-risks ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mission-risks li {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .students-section {
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

  .dialog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid #333;
    background: #222;
    cursor: pointer;
  }

  button.primary {
    background: #2e944b;
    border: none;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .no-student {
    padding: 1rem;
    color: rgb(235, 26, 54);
    text-align: center;
  }
</style>
