<script>
	import TablePokemon from '$lib/components/TablePokemon.svelte';
	import { pageColor, recruitedPokemon } from '$lib/store';

	export let data;

	const pokemonList = data.pokemonList;

	$pageColor = [];
</script>

<h1>Pokédex</h1>
<h2>
	Pokémon recruited: {$recruitedPokemon.length}/{pokemonList.length}
	<span>({Math.round((100 / pokemonList.length) * $recruitedPokemon.length * 100) / 100}%)</span>
</h2>
<TablePokemon {pokemonList} />
