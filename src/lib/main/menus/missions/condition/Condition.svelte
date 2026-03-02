<script lang="ts">
  import type { Condition } from "../../../../../game/missions/models/Condition";

  interface Props {
    condition: Condition;
  }

  const { condition }: Props = $props();

  const parseCondition = () => {
    switch (condition.type) {
      case "hasTrait":
        return `A student has the trait ${condition.params}`;

      case "maxRank":
        return `Maximum rank ${condition.params.value}`;

      case "minRank":
        return `Minimum rank ${condition.params.value}`;

      case "randomChance":
        return `Random chance ${condition.params}`;

      case "statAbove":
        return `Stat above ${condition.params}`;

      case "teamSize":
        return `Strict team size of ${condition.params}`;

      default:
        return "Unknown condition";
    }
  };
</script>

<li>{parseCondition()}</li>
