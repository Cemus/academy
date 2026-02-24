<script lang="ts">
  import type Game from "../../game/Game";
  import { getMenuItems, type GameMenu } from "../../game/ui/data/menus";
  import type { Menu } from "../../game/ui/models/Menu";
  import MenuCard from "./MenuCard.svelte";

  interface Props {
    game: Game;
  }

  const { game }: Props = $props();

  const derivedState = $derived(game);
  let menuItems: GameMenu[] = $state([]);

  const onMenuClick = (menu: Menu) => {
    game.ui.currentMenu = menu;
    history.pushState({ menu }, "", `/${menu}`);
    console.log(history);
  };

  $effect(() => {
    menuItems = getMenuItems(derivedState);
  });
</script>

<main>
  {#each menuItems as item}
    <MenuCard
      menu={item.menu}
      text={item.text}
      subtitle={item.subtitle}
      icon={item.icon}
      {onMenuClick}
    />
  {/each}
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
  }
</style>
