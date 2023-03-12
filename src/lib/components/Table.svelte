<script>
	import { recruitedPokemon } from '$lib/store';
	import Sort from '$lib/components/Sort.svelte';
	import Link from '$lib/components/Link.svelte';
	import Type from '$lib/components/Type.svelte';
	import Recruited from '$lib/components/Recruited.svelte';
	import Portrait from '$lib/components/Portrait.svelte';
	import Fa from 'svelte-fa';

	export let headers;
	export let data;
	export let showIcons = false;

	let sort = {
		column: 'id',
		ascending: true
	};
	let sortedData = data;

	function sortData() {
		// Different logic for recruited sort
		if (sort.column === 'recruited') {
			sortedData = [...data]
				.map((item) => {
					item.recruited = $recruitedPokemon.includes(item.id);
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
		if (sort.column === 'recruited') sortData();
	});
</script>

<table>
	<tr>
		{#if showIcons}
			<th class="icons" />
		{/if}
		{#each headers as header}
			<th class:hasIcon={header.icon} class:sortable={header.sortable}>
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

	{#each sortedData as item (item.id)}
		<tr id={item.id}>
			{#if showIcons}
				<td class="icons">
					<Portrait id={item.id} />
				</td>
			{/if}
			{#each headers as header}
				<td>
					{#if header.link}
						<Link path="pokedex/{item.id}">
							{item[header.column]}
						</Link>
					{:else if header.column === 'type'}
						<Type types={item.type} />
					{:else if header.column === 'recruited'}
						<Recruited id={item.id} hideLabel={true} />
					{:else}
						{item[header.column]}
					{/if}
				</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table {
		position: relative;
		border-spacing: 0;
		border-collapse: collapse;
	}

	table,
	th,
	td {
		border: 1px solid var(--color-black-light);
	}

	th,
	td {
		padding: 0.3rem;
		vertical-align: center;
	}

	th {
		font-weight: 400;
		text-align: left;
		position: sticky;
		top: calc(5rem - 1px);
		background-color: var(--color-black);
		z-index: 1;
	}

	/* line under th */
	th::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: var(--color-black-light);
	}

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

	tr {
		height: 2.6rem;
	}
</style>
