<script>
	import TablePokemon from '$lib/components/TablePokemon.svelte';
	import { pageColor } from '$lib/store';

	export let data;

	const pokemonList = data.pokemonList;

	$pageColor = [];
</script>

<h1>Pokédex</h1>
<TablePokemon {pokemonList} />
