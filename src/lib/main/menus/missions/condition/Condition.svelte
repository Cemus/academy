<script lang="ts">
  import { Rank } from "../../../../../game/characters/models/Rank";
  import type { Condition } from "../../../../../game/missions/models/conditions/Condition";
  import { HasTraitCondition } from "../../../../../game/missions/models/conditions/HasTraitCondition";
  import { MaxRankCondition } from "../../../../../game/missions/models/conditions/MaxRankCondition";
  import { MinRankCondition } from "../../../../../game/missions/models/conditions/MinRankCondition";

  interface Props {
    condition: Condition;
  }

  const { condition }: Props = $props();

  const parseCondition = () => {
    if (condition instanceof HasTraitCondition) {
      return `A student has the trait ${condition.trait}`;
    }

    if (condition instanceof MinRankCondition) {
      return `Minimum rank ${Rank[condition.minRank]}`;
    }

    if (condition instanceof MaxRankCondition) {
      return `Maximum rank ${Rank[condition.maxRank]}`;
    }

    return "Unknown condition";
  };
</script>

<li>{parseCondition()}</li>
