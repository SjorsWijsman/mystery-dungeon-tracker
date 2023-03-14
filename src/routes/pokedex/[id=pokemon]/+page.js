import { pokemonList } from '$lib/data/pokemon';

export function load({ params }) {
	const pokemon = pokemonList.find((pokemon) => pokemon.id === params.id);
	return pokemon;
}
