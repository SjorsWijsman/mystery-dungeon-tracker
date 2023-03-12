<script>
	import Sort from '$lib/components/Sort.svelte';
	import Link from '$lib/components/Link.svelte';
	import Type from '$lib/components/Type.svelte';
	import Fa from 'svelte-fa';
	import Recruited from '$lib/components/Recruited.svelte';

	export let headers;
	export let data;
	export let showIcons = false;

	let sort = {
		column: 'id',
		ascending: true
	};
	let sortedData = data;

	function sortData() {
		sortedData = [...data].sort(compare);
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
					<img src={item.icon} alt="" />
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
						<Recruited id={item.id} />
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
	}

	th {
		font-weight: 400;
		text-align: left;
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
		opacity: 0.95;
	}

	td:not(.icons) {
		padding: 0.3rem 0.6rem;
		padding-right: 1rem;
		opacity: 0.95;
	}

	tr {
		height: 2.6rem;
	}

	tr img {
		display: block;
		border-radius: 0.3rem;
		width: 2rem;
		height: 2rem;
		background-color: var(--color-black-light);
		transform: scaleX(-1);
	}
</style>
