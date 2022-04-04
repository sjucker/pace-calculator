<script lang="ts">
	import { getFactor } from '$lib/enums';
	import { unit } from '../stores';

	export let distanceInMeters = 0;
	let distanceInCurrentUnit: number;

	unit.subscribe((value) => {
		distanceInCurrentUnit = distanceInMeters / getFactor(value);
	});

	$: distanceInMeters = distanceInCurrentUnit * getFactor($unit);
</script>

<input type="number" bind:value={distanceInCurrentUnit} />
{$unit}

<style>
	input[type='number'] {
		width: 100px;
	}
</style>
