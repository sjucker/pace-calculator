<script lang="ts">
	export let timeInSeconds: number;

	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	$: onPropertyChange(timeInSeconds);

	function onPropertyChange(timeInSeconds: number) {
		hours = Math.floor(timeInSeconds / 3600);
		minutes = Math.floor((timeInSeconds % 3600) / 60);
		seconds = Math.floor((timeInSeconds % 3600) % 60);
	}

	function formatNumber(n: number): String {
		return n.toLocaleString(undefined, { minimumIntegerDigits: 2, maximumFractionDigits: 0 });
	}
</script>

{formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
