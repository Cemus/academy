<script lang="ts">
  import type { Menu } from "../../game/ui/models/Menu";

  interface Props {
    menu: Menu;
    text: string;
    icon: string;
    subtitle: string;
    onMenuClick: (menu: Menu) => void;
  }

  const { menu, text, icon, subtitle, onMenuClick }: Props = $props();

  const handleMenuClick = () => {
    onMenuClick(menu);
  };
</script>

<button type="button" onclick={() => handleMenuClick()} class="card">
  <div class="icon">{icon}</div>
  <h2>{text}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
</button>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e0f7ff;
    min-height: 12rem;
    min-width: 12rem;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    transition: all 125ms ease;
    cursor: pointer;
    margin: 2rem;
    text-align: center;
    border: solid 2px transparent;
  }

  .card:hover {
    box-shadow: 0 0 20px rgba(255, 174, 0, 0.6);
    border: solid 2px #ffae00;
    transform: scale(1.05);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin: 0.25rem 0;
    font-size: 1.25rem;
    color: #333;
    transition: all 250ms ease-in-out;
  }

  .card:hover h2 {
    color: #833b00;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 0.9rem;
    color: #333;
  }
</style>
