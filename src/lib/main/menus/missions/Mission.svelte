<script lang="ts">
  import type Game from "../../../../game/Game";
  import type { Mission } from "../../../../game/missions/models/Mission";
  import Condition from "./condition/Condition.svelte";
  import MissionDialog from "./send/MissionDialog.svelte";

  interface Props {
    mission: Mission;
    game: Game;
  }

  const { mission, game }: Props = $props();

  let dialogRef: MissionDialog | null = $state(null);

  const riskLevels = [
    { max: 20, label: "Very Low" },
    { max: 40, label: "Low" },
    { max: 60, label: "Medium" },
    { max: 80, label: "High" },
    { max: 100, label: "Very High" },
  ];

  const riskProbabilityToString = (probability: number): string => {
    return (
      riskLevels.find((level) => probability <= level.max)?.label ?? "Unknown"
    );
  };
</script>

<li class="container">
  <article class="mission-card {mission.expired ? 'expired' : ''}">
    <header class="mission-header">
      <h3>{mission.name}</h3>

      {#if mission.expired}
        <span class="badge expired-badge">EXPIRED</span>
      {/if}
    </header>

    <div class="mission-meta">
      {#if !mission.expired}
        <div class="meta-block">
          <span class="label">Expires</span>
          <span class="value">{mission.expiresIn}d</span>
        </div>
      {/if}

      <div class="meta-block">
        <span class="label">Duration</span>
        <span class="value">{mission.duration}d</span>
      </div>
    </div>

    <div class="section">
      <span class="section-title">Risks</span>
      <div class="tags">
        {#each mission.risks as risk}
          <span class="tag risk">
            {risk.name}
            <span class="prob">{riskProbabilityToString(risk.probability)}</span
            >
          </span>
        {/each}
      </div>
    </div>

    <div class="section">
      <span class="section-title">Rewards</span>
      <div class="tags">
        {#each mission.rewards as reward}
          <span class="tag reward">
            +{reward.params.value}
            {reward.name}
          </span>
        {/each}
      </div>
    </div>

    {#if mission.conditions.length > 0}
      <div class="section">
        <span class="section-title">Conditions</span>
        <ul class="conditions">
          {#each mission.conditions as condition}
            <Condition {condition} />
          {/each}
        </ul>
      </div>
    {/if}

    <button
      class="send-btn"
      disabled={mission.expired}
      onclick={() => dialogRef?.open()}
    >
      Take Mission
    </button>
  </article>
</li>
{#key $game}
  <MissionDialog bind:this={dialogRef} {game} {mission} />
{/key}

<style>
  .container {
    list-style: none;
    flex: 0 0 auto;
    display: flex;
    height: 100%;
  }

  .mission-card {
    width: 380px;
    background: linear-gradient(145deg, #111, #1a1a1a);
    border: 1px solid #222;
    border-radius: 12px;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    user-select: none;
  }

  .mission-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  }

  .mission-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mission-header h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  .badge {
    padding: 4px 8px;
    font-size: 0.9rem;
    border-radius: 6px;
    font-weight: bold;
  }

  .expired-badge {
    background: #8b1e1e;
    color: white;
  }

  .mission-meta {
    display: flex;
    gap: 1rem;
  }

  .meta-block {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
  }

  .label {
    opacity: 0.6;
    font-size: 0.7rem;
    text-transform: uppercase;
  }

  .value {
    font-weight: bold;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    opacity: 0.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 0.75rem;
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .tag.risk {
    background: #2a1a1a;
    border: 1px solid #442222;
    color: #ff8c8c;
  }

  .tag.reward {
    background: #1a2a1a;
    border: 1px solid #224422;
    color: #7dff9e;
  }

  .prob {
    opacity: 0.6;
  }

  .conditions {
    margin: 0;
    padding-left: 1rem;
    font-size: 0.8rem;
  }

  .send-btn {
    margin-top: auto;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    background: linear-gradient(145deg, #2e944b, #1f6e36);
    color: white;
    transition:
      opacity 0.15s ease,
      transform 0.1s ease;
  }

  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  .send-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .mission-card.expired {
    filter: grayscale(70%);
    opacity: 0.7;
  }

  @media (max-width: 412px) {
    .container {
      padding-bottom: 0;
    }
    .mission-card {
      width: 300px;
    }
  }
</style>
