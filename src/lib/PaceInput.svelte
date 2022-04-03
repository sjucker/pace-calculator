<script lang="ts">

  import { unit } from "../stores";
  import { Unit } from "$lib/enums";

  export let paceInSecondsPerMeter = 0;
  let paceInSecondsPerCurrentUnit;

  unit.subscribe(value => {
    paceInSecondsPerCurrentUnit = value === Unit.KILOMETER ?
      paceInSecondsPerMeter * 1000 :
      paceInSecondsPerMeter * 1609;
  });

  let paceMinutes = 0;
  let paceSeconds = 0;

  $: paceInSecondsPerMeter = ((paceMinutes * 60) + paceSeconds) / ($unit === Unit.KILOMETER ? 1000 : 1609);
  $: {
    paceMinutes = Math.floor(paceInSecondsPerCurrentUnit / 60);
    paceSeconds = Math.floor(paceInSecondsPerCurrentUnit % 60);
  }
</script>

Pace:
<input type="number" max="59" bind:value={paceMinutes} />m
<input type="number" max="59" bind:value={paceSeconds} />s
/{$unit}

<style>
    input[type='number'] {
        width: 30px;
    }
</style>
