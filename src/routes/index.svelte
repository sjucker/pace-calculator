<script lang="ts">
  import { unit } from "../stores.ts";
  import { Unit } from "$lib/enums.ts";
  import DistanceInput from "$lib/DistanceInput.svelte";
  import TimeInput from "$lib/TimeInput.svelte";
  import PaceInput from "$lib/PaceInput.svelte";

  let distanceInMeters = 42195; // Marathon: 42.195 km
  let timeInSeconds;
  let paceInSecondsPerMeter = 0.24; // 4min / km => 0.24s / m

  $: timeInSeconds = distanceInMeters * paceInSecondsPerMeter;
</script>

<svelte:head>
  <title>Pace Calculator</title>
</svelte:head>

<div>
  Unit:
  <select bind:value={$unit}>
    {#each Object.entries(Unit) as [unit, description]}
      <option value={Unit[unit]}>{description}</option>
    {/each}
  </select>
</div>
<br />
<DistanceInput bind:distanceInMeters />
<br />
<PaceInput bind:paceInSecondsPerMeter />
<br />
<TimeInput bind:timeInSeconds />

<pre>
  {distanceInMeters}
  {timeInSeconds}
  {paceInSecondsPerMeter}
</pre>
