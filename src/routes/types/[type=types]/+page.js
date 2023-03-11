import { pokemonList } from '$lib/data/pokemon';

export function load({ params }) {
	return { pokemonList: pokemonList.filter((item) => item.type.includes(params.type)) };
}
