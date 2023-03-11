import { pokemonList } from '$lib/data/pokemon';

export function load({ params }) {
	const pokemon = pokemonList.filter((pokemon) => pokemon.id === params.id)[0];
	return pokemon;
}
