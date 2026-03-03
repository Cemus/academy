<script lang="ts">
  import type { Character } from "../../../../../game/characters/models/Character";
  import { Rank } from "../../../../../game/characters/models/Rank";
  import type Game from "../../../../../game/Game";
  import type { Mission } from "../../../../../game/missions/models/Mission";

  let dialogElement: HTMLDialogElement;

  interface Props {
    game: Game;
    mission: Mission;
  }

  const { game, mission }: Props = $props();

  export function open() {
    dialogElement.showModal();
  }

  export function close() {
    sendStudentsList = [];
    dialogElement.close();
  }

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

  const sendStudents = () => {};
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
          {#each game.academy.students as student}
            <tr class:selected={isSelected(student)}>
              <td class="name-cell">
                {student.name}
                {#if student.isOnMission}
                  <span class="status on-mission">On mission</span>
                {/if}
              </td>

              <td>
                <div class="stats">
                  <div>
                    STR <span>{student.stats.str}</span>
                  </div>
                  <div>
                    VIT <span>{student.stats.vit}</span>
                  </div>
                </div>
              </td>

              <td>
                <span class="rank rank-{Rank[student.rank]}">
                  {Rank[student.rank]}
                </span>
              </td>

              <td>
                <input
                  title="Select a student"
                  name="selectStudent"
                  type="checkbox"
                  disabled={student.isOnMission}
                  checked={isSelected(student)}
                  onchange={() => toggleStudent(student)}
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
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
          onclick={() => sendStudents()}
          disabled={sendStudentsList.length === 0}
        >
          Send
        </button>
      </div>
    </footer>
  </div>
</dialog>

<style>
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

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #222;
  }

  tbody tr {
    transition: background 0.15s ease;
  }

  tbody tr:hover {
    background: #1c1c1c;
  }

  tbody tr.selected {
    background: #222833;
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.9rem;
  }

  .stats span {
    font-weight: bold;
  }

  .rank {
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.85rem;
  }

  .rank-A {
    background: #3a7dff;
  }
  .rank-B {
    background: #2e944b;
  }
  .rank-C {
    background: #b58a2a;
  }
  .rank-D {
    background: #8a5a2a;
  }
  .rank-E {
    background: #666;
  }

  .status {
    margin-left: 8px;
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .on-mission {
    color: #f39c12;
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

  input {
    cursor: pointer;
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
</style>
