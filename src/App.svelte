<script lang="ts">
  import Game from "./game/Game";
  import type { Menu } from "./game/ui/models/Menu";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";
  import { onMount } from "svelte";

  const game = new Game();

  onMount(() => {
    const path = window.location.pathname.replace("/", "");

    if (!path) {
      history.replaceState({ menu: "main" }, "", "/main");
      game.ui.currentMenu = "main";
    } else {
      game.ui.currentMenu = path as Menu;
    }

    const handler = (event: PopStateEvent) => {
      const menu = event.state?.menu;
      if (menu) {
        game.ui.currentMenu = menu;
      } else {
        game.ui.currentMenu = "main";
      }
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  });
</script>

<Header />
<Main {game} />
<Footer {game} />

<style>
</style>
