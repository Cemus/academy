<script lang="ts">
  import type { Character } from "../../../../game/characters/models/Character";
  import avatarPlaceholder from "../../../../assets/characters/avatar_placeholder.png";
  import { Rank } from "../../../../game/characters/models/Rank";

  interface Props {
    student: Character | null;
    handleStudentSelection: (student: Character | null) => void;
  }

  const { student, handleStudentSelection }: Props = $props();

  let dialogElement: HTMLDialogElement;

  export function open() {
    dialogElement.showModal();
  }

  export function close() {
    dialogElement.close();
  }
</script>

<dialog bind:this={dialogElement} class="student-panel">
  <div class="student-panel-content">
    {#if student}
      <header>
        <img src={avatarPlaceholder} alt="avatar" />
        <h3>{student.name} {student.surname}</h3>
        <span class="rank rank-{Rank[student.rank]}">
          {Rank[student.rank]}
        </span>
      </header>
      <div class="top">
        <section>
          <h4>Stats</h4>

          <div class="stats">
            {#each Object.entries(student.stats) as [stat, value]}
              <div>
                <span>{stat.toUpperCase()}</span>
                <strong>{value}</strong>
              </div>
            {/each}
          </div>
        </section>
        <section>
          <h4>Traits</h4>

          <div class="traits">
            {#each student.traits as trait}
              <div>
                <span>{trait.name.toUpperCase()}</span>
              </div>
            {/each}
          </div>
        </section>
      </div>
      <section>
        <h4>Status</h4>

        {#if student.currentMission}
          <p class="status on-mission">On mission</p>

          {#if student.currentMission}
            {@const mission = student.currentMission}
            <p class="mission">
              Mission: {mission.name}
              <span
                >{`(${mission.duration} day${mission.duration > 1 ? "s" : ""} left)`}</span
              >
            </p>
          {/if}
        {:else}
          <p class="status free">Available</p>
        {/if}
      </section>

      <footer>
        <button
          class="close"
          type="button"
          onclick={() => handleStudentSelection(null)}
        >
          Close
        </button>
      </footer>
    {/if}
  </div>
</dialog>

<style>
  .student-panel {
    border: none;
    width: 280px;
  }

  .student-panel-content {
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .student-panel::backdrop {
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(1px);
  }

  header {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 6px;
  }

  .rank {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.75rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
  }

  .status.free {
    color: #aaa;
  }

  .status.on-mission {
    color: #f39c12;
  }

  .mission {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  footer {
    display: flex;
    justify-content: center;
  }

  .close {
    position: sticky;
    cursor: pointer;
    background-color: rgb(179, 20, 47);
    border: solid 1px transparent;
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    align-self: center;
  }
  .close:hover {
    border: solid 1px aliceblue;
  }

  .rank {
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.85rem;
    color: white;
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
</style>
