<script lang="ts">
  import type { Mission } from "../../../../game/missions/models/Mission";

  interface Props {
    mission: Mission;
  }

  const { mission }: Props = $props();
</script>

<li class={`container`}>
  <article class={` ${mission.expired ? "expired" : ""}`}>
    <h3>{mission.name}</h3>
    <div>
      {#if !mission.expired}
        <dl>
          <dt>Expires in:</dt>
          <dd>
            {`${mission.expiresIn} day${mission.expiresIn > 1 ? "s" : ""}`}
          </dd>
        </dl>
      {:else}
        <p style="color:red">EXPIRED</p>
      {/if}

      <dl>
        <dt>Duration:</dt>
        <dd>{`${mission.duration} day${mission.duration > 1 ? "s" : ""}`}</dd>
      </dl>
    </div>

    <dl>
      <dt>Risks:</dt>
      <dd>
        <ul>
          {#each mission.risks as risk}
            <li>
              <p>{risk.name} <span>({risk.probability}%)</span></p>
            </li>{/each}
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>Conditions:</dt>
      <dd>
        <ul>
          {#each mission.conditions as condition}
            <li>condition</li>{/each}
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>Rewards:</dt>
      <dd>
        <ul>
          {#each mission.rewards as reward}
            <li>{reward.name}</li>{/each}
        </ul>
      </dd>
    </dl>
  </article>
  <button type="button" disabled={mission.expired}>Send students</button>
</li>

<style>
  .container {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px transparent;
    border-radius: 0.25rem;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background-color: black;
    box-shadow: 2px 2px 10px black;
  }

  .expired {
    background-color: gray;
    color: black;
  }

  h3 {
    margin: 0;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  div > dl {
    flex-direction: row;
  }

  dl {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  dd {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
  }
</style>
