<script lang="ts">
	import { getFactor } from '$lib/enums';
	import { onDestroy } from 'svelte';
	import { unit } from '../stores';

	export let distanceInMeters = 0;
	let distanceInCurrentUnit: number;

	const unsubscribe = unit.subscribe((value) => {
		distanceInCurrentUnit = distanceInMeters / getFactor(value);
	});

	$: distanceInMeters = distanceInCurrentUnit * getFactor($unit);

	onDestroy(unsubscribe);
</script>

<input type="number" bind:value={distanceInCurrentUnit} />
{$unit}

<style>
	input[type='number'] {
		width: 100px;
	}
</style>
