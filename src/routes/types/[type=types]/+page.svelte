<script>
	import TablePokemon from '$lib/components/TablePokemon.svelte';
	import Type from '$lib/components/Type.svelte';
	import Table from '$lib/components/Table.svelte';
	import { typeList } from '$lib/data/types';
	import { page } from '$app/stores';
	import { pageColor } from '$lib/store';
	import { faAngleDoubleDown, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

	export let data;

	$: $pageColor = [`--color-${$page.params.type}`];

	let type;

	$: type = $page.params.type;

	let pokemonList;

	$: pokemonList = data.pokemonList;

	const headers = [
		{
			column: 'superEffective',
			title: 'Super Effective (1.7x)',
			type: 'type',
			icon: faAngleUp
		},
		{
			column: 'notVeryEffective',
			title: 'Not Very Effective (0.7x)',
			type: 'type',
			icon: faAngleDown
		},
		{
			column: 'littleEffect',
			title: 'Little Effect (0.5x)',
			type: 'type',
			icon: faAngleDoubleDown
		}
	];
</script>

<h1>
	{type}
	<Type types={type} />
</h1>

<h2>Damage Chart</h2>
{#key type}
	<Table data={typeList.filter((item) => item.type === type)} {headers} />
{/key}

<h2>Pokémon with this type <span>({pokemonList.length})</span></h2>
<TablePokemon {pokemonList} />

<style>
	h1 {
		text-transform: capitalize;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 0.5rem;
	}
</style>
