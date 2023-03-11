<script>
	import TablePokemon from '$lib/components/TablePokemon.svelte';
	import Type from '$lib/components/Type.svelte';
	import { page } from '$app/stores';
	import { pageColor } from '$lib/store';

	export let data;

	$: $pageColor = [`--color-${$page.params.type}`];

	let pokemonList;

	$: pokemonList = data.pokemonList;
</script>

<h1>
	{$page.params.type}
	<Type types={[$page.params.type]} />
</h1>

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
