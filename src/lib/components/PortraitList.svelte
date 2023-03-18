<script>
	import Portrait from '$lib/components/Portrait.svelte';
	export let ids = [];
	export let type = 'pokedex';
</script>

<div>
	{#each ids as id}
		<Portrait {id} {type} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		max-width: 18.5rem;
		padding: 0.2rem 0;
	}
</style>
