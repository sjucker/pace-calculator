<script lang="ts">
	import { page } from '$app/stores';

	let greeting = $page.params['id'];
</script>

<svelte:head>
	<title>Info Page</title>
</svelte:head>

<h1>Hello {greeting}</h1>

<p><a href="/">back</a></p>