<script>
	import { recruitedPokemon, completedDungeons } from '$lib/store';
	import Sort from '$lib/components/Sort.svelte';
	import Link from '$lib/components/Link.svelte';
	import Type from '$lib/components/Type.svelte';
	import Completed from '$lib/components/Completed.svelte';
	import Portrait from '$lib/components/Portrait.svelte';
	import Effectiveness from '$lib/components/Effectiveness.svelte';
	import Fa from 'svelte-fa';

	export let headers = [];
	export let data = [];
	export let showIcons = false;
	export let type = 'pokedex';

	let sort = {
		column: 'id',
		ascending: true
	};

	let sortedData = [...data];

	function sortData() {
		// Different logic for recruited sort
		if (sort.column === 'completed') {
			sortedData = [...data]
				.map((item) => {
					if (type === 'dungeons') item.completed = $completedDungeons.includes(item.id);
					else item.completed = $recruitedPokemon.includes(item.id);
					return item;
				})
				.sort((a, b) => compare(b, a));
		} else {
			sortedData = [...data].sort(compare);
		}
	}

	sortData();

	function compare(a, b) {
		if (a[sort.column] < b[sort.column]) {
			return sort.ascending ? -1 : 1;
		}
		if (a[sort.column] > b[sort.column]) {
			return sort.ascending ? 1 : -1;
		}
		return 0;
	}

	// Resort data on recruitedpokemon change
	recruitedPokemon.subscribe(() => {
		if (sort.column === 'completed') sortData();
	});

	completedDungeons.subscribe(() => {
		if (sort.column === 'completed') sortData();
	});
</script>

<table>
	<thead>
		{#if headers.length > []}
			<tr>
				{#if showIcons}
					<th class="icons" />
				{/if}
				{#each headers as header}
					<th
						class:hasIcon={header.icon}
						class:sortable={header.sortable}
						class:vertical={header.vertical}
					>
						<div>
							<Fa icon={header.icon} />
							<span>{header.title}</span>
							{#if header.sortable}
								<Sort column={header.column} bind:sort on:sorted={sortData} />
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		{:else}
			<tr><th>Please supply headers to display</th></tr>
		{/if}
	</thead>

	<tbody>
		{#each sortedData as item (item.id)}
			<tr id={item.id}>
				{#if showIcons}
					<td class="icons">
						<Portrait id={item.id} {type} />
					</td>
				{/if}
				{#each headers as header}
					<td>
						{#if header.type === 'link'}
							<Link path="{type}/{item.id}">
								{item[header.column]}
							</Link>
						{:else if header.type === 'type'}
							<Type types={item[header.column]} />
						{:else if header.type === 'completed'}
							<Completed id={item.id} hideLabel={true} {type} />
						{:else if header.type === 'effectiveness'}
							<Effectiveness value={item[header.column]} />
						{:else}
							{item[header.column]}
						{/if}
					</td>
				{/each}
			</tr>
		{:else}
			<tr><td>No data available to display</td></tr>
		{/each}
	</tbody>
</table>

<style>
	th > div {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	th > div > :global(button:last-child) {
		margin-left: auto;
	}

	th.hasIcon span {
		margin: 0.3rem;
	}

	th:not(.icons) {
		padding: 0.3rem 0.6rem;
		padding-right: 0.3rem;
	}

	td:not(.icons) {
		padding: 0.3rem 0.6rem;
		padding-right: 1rem;
		opacity: 0.95;
	}
</style>
