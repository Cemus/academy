<script lang="ts">
  import type { Character } from "../../../../game/characters/models/Character";
  import avatarPlaceholder from "../../../../assets/characters/avatar_placeholder.png";
  import { Rank } from "../../../../game/characters/models/Rank";
  interface Props {
    student: Character;
    handleStudentSelection: (student: Character) => void;
    isSelected: boolean;
  }

  const { student, handleStudentSelection, isSelected }: Props = $props();
</script>

<tr
  onclick={() => handleStudentSelection(student)}
  class={` ${isSelected ? "selected" : ""}`}
>
  <td class={`name-cell`}>
    <img src={avatarPlaceholder} alt="avatar" />
    {student.name}
    {student.surname}
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
    <span class={`status ${student.currentMission ? "on-mission" : ""} `}>
      {student.currentMission ? `On mission` : `FREE`}
    </span>
  </td>
</tr>

<style>
  tr {
    text-align: center;
    cursor: pointer;
    transition: background 0.15s ease;
    border-left: 2px solid transparent;
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

  .status {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.7rem;
    background: rgba(207, 207, 207, 0.15);
    color: white;
  }

  .on-mission {
    background: rgba(243, 156, 18, 0.15);
    color: #f39d12d0;
  }

  .name-cell > * {
    display: block;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    object-fit: cover;
    justify-self: center;
  }
</style>
