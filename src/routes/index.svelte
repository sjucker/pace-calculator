<script lang="ts">
	import DistanceInput from '$lib/DistanceInput.svelte';
	import { Unit } from '$lib/enums';
	import PaceInput from '$lib/PaceInput.svelte';
	import TimeOutput from '$lib/TimeInput.svelte';
	import { unit } from '../stores';

	let distanceInMeters = 42195; // Marathon: 42.195 km
	let timeInSeconds: number;
	let paceInSecondsPerMeter = 0.24; // 4min / km => 0.24s / m

	$: timeInSeconds = distanceInMeters * paceInSecondsPerMeter;
</script>

<svelte:head>
	<title>Pace Calculator</title>
</svelte:head>

<div id="unit-selection">
	Unit:
	<select bind:value={$unit}>
		{#each Object.entries(Unit) as [unit, description]}
			<option value={Unit[unit]}>{description}</option>
		{/each}
	</select>
</div>

<table>
	<tr>
		<td>Distance:</td>
		<td><DistanceInput bind:distanceInMeters /></td>
	</tr>
	<tr>
		<td>Pace:</td>
		<td><PaceInput bind:paceInSecondsPerMeter /></td>
	</tr>
	<tr>
		<td>Time:</td>
		<td class="time"><TimeOutput {timeInSeconds} /></td>
	</tr>
</table>
<hr />
<p><a href="/info/staff-meeting">Info</a></p>

<style>
	#unit-selection {
		margin-bottom: 30px;
	}
</style>
