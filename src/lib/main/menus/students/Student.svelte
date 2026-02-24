<script lang="ts">
  import type { Character } from "../../../../game/characters/models/Character";
  import avatarPlaceholder from "../../../../assets/characters/avatar_placeholder.png";
  interface Props {
    student: Character;
  }

  const { student }: Props = $props();
</script>

<li>
  <div class="left">
    <div class="avatar-container">
      <img src={avatarPlaceholder} alt="avatar" />
      <p class="rank">{student.rank}</p>
    </div>
    <p class="name">{student.name} {student.surname}</p>
  </div>
  <div class="right"><p>Test</p></div>
</li>

<style>
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    border: solid 1px transparent;
    cursor: pointer;
    border-radius: 0.25rem;
    align-items: center;
    padding: 1rem;
    margin-inline: 1rem;
  }

  li:hover {
    border: solid 1px aliceblue;
  }

  .left {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
  }

  .avatar-container {
    position: relative;
    width: 5rem;
    height: 5rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    display: block;
  }

  .rank {
    position: absolute;
    color: gold;
    font-weight: bolder;
    background-color: black;
    border-radius: 50%;
    text-align: center;
    width: 24px;
    height: 24px;
    top: -24px;
    right: -8px;
    line-height: 24px;
  }

  .name {
    margin: 0;
    padding: 0;
    font-weight: bold;
    background-color: aliceblue;
    color: black;
    padding-inline: 0.25rem;
    border-radius: 0.25rem;
  }
</style>
