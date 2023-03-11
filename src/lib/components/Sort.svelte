<script>
	import Fa from 'svelte-fa';
	import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';

	export let column;
	export let sort;

	const dispatch = createEventDispatcher();

	function setSort() {
		if (sort.column === column) {
			if (sort.ascending) sort.ascending = false;
			else {
				sort.column = 'id';
				sort.ascending = true;
			}
		} else {
			sort.column = column;
			sort.ascending = true;
		}
		dispatch('sorted', { sort });
	}
</script>

{#key sort}
	<button on:click={() => setSort()} class:inactive={sort.column !== column}>
		{#if sort.column === column}
			{#if sort.ascending}
				<Fa icon={faSortDown} />
			{:else}
				<Fa icon={faSortUp} />
			{/if}
		{:else}
			<Fa icon={faSort} />
		{/if}
	</button>
{/key}

<style>
	button {
		background-color: transparent;
		border: 0px;
		cursor: pointer;
		transition: opacity 0.3s ease-out;
		height: 2rem;
		width: 2rem;
	}

	button.inactive {
		opacity: 0.3;
	}

	button.inactive:hover {
		opacity: 0.6;
	}
</style>
