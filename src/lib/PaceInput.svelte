<script lang="ts">
	import { getFactor } from '$lib/enums';
	import { unit } from '../stores';

	export let paceInSecondsPerMeter = 0;
	
	let paceInSecondsPerCurrentUnit: number;

	let paceMinutes = 0;
	let paceSeconds = 0;

	unit.subscribe((value) => {
		paceInSecondsPerCurrentUnit = paceInSecondsPerMeter * getFactor(value);
	});

	$: paceInSecondsPerMeter = (paceMinutes * 60 + paceSeconds) / getFactor($unit);
	$: {
		paceMinutes = Math.floor(paceInSecondsPerCurrentUnit / 60);
		paceSeconds = Math.floor(paceInSecondsPerCurrentUnit % 60);
	}
</script>

<input type="number" max="59" bind:value={paceMinutes} /> min
<input type="number" max="59" bind:value={paceSeconds} /> s / {$unit}

<style>
	input[type='number'] {
		width: 30px;
	}
</style>
