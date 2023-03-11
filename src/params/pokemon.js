import { pokemonList } from '$lib/data/pokemon';

export function match(param) {
	return pokemonList.map((item) => item.id).includes(param);
}
