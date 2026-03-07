<script lang="ts">
  import type { Character } from "../../../../../game/characters/models/Character";
  import { Rank } from "../../../../../game/characters/models/Rank";
  import type { ConditionResult } from "../../../../../game/missions/models/conditions/Condition";
  import { Mission } from "../../../../../game/missions/models/Mission";

  interface Props {
    students: Character[];
    isSelected: (student: Character) => boolean;
    toggleStudent: (student: Character) => void;
    mission: Mission;
  }

  const { students, isSelected, toggleStudent, mission }: Props = $props();

  const getStudentStatus = (
    student: Character,
  ): {
    unavailable: boolean;
    conditionResults: ConditionResult[];
  } => {
    const conditionResults = student.getMissionConditionsResults(mission);
    const unavailable =
      !conditionResults.every((c) => c.valid) ||
      Boolean(student.currentMission);

    return { unavailable, conditionResults };
  };
</script>

{#each students as student (student.id)}
  {@const { unavailable, conditionResults } = getStudentStatus(student)}
  {@const selected = isSelected(student)}

  <tr
    class:selected
    class:unavailable
    onclick={() => !unavailable && toggleStudent(student)}
  >
    <td class="name-cell">
      {student.name}

      {#if unavailable}
        <ul>
          {#each conditionResults as result}
            {#if result.reason}
              <li class="status">{result.reason}</li>
            {/if}
          {/each}
        </ul>
      {/if}
    </td>

    <td>
      <div class="stats">
        {#each Object.entries(student.stats) as [stat, value]}
          <p>
            {stat.toUpperCase()} <span>{value}</span>
          </p>
        {/each}
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
        type="checkbox"
        disabled={unavailable}
        checked={selected}
      />
    </td>
  </tr>
{/each}

<style>
  tr {
    text-align: center;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  tr:hover:not(.unavailable) {
    background: rgba(243, 156, 18, 0.08);
  }

  .selected {
    background: rgba(46, 148, 75, 0.15);
    border-left: 2px solid #2e944b;
  }

  .unavailable {
    color: #666;
    cursor: not-allowed;
  }

  .unavailable:hover {
    background: rgba(255, 0, 0, 0.08);
  }

  .stats {
    display: grid;
    grid-template-columns: auto max-content;
    justify-content: center;
    gap: 1rem;
    row-gap: 4px;
    font-size: 0.9rem;
  }

  .stats p {
    display: contents;
    margin: 0;
  }

  .stats span {
    font-weight: bold;
    text-align: right;
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

  .name-cell > ul {
    margin: 0;
    padding: 0;
  }

  .name-cell ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style: none;
  }

  .status {
    font-size: 0.7rem;
    color: #f39d12d0;
    font-style: italic;
    white-space: nowrap;
    text-align: center;
  }

  input {
    pointer-events: none;
  }
</style>
