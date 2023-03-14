import { pokemonList } from '$lib/data/pokemon';
import { dungeonList } from '$lib/data/dungeons';

export function load({ params }) {
	const pokemon = pokemonList.find((pokemon) => pokemon.id === params.id);
	const foundIn = [];
	dungeonList.forEach((dungeon) => {
		if (
			dungeon.pokemon.forEach((dungeonPokemon) => {
				if (dungeonPokemon.id === params.id) {
					foundIn.push({ id: dungeon.id, title: dungeon.title, floors: dungeonPokemon.floors });
				}
			})
		);
	});
	pokemon.foundIn = foundIn;
	return pokemon;
}
