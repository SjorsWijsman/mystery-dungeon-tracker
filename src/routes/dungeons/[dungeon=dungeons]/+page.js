import { dungeonList } from '$lib/data/dungeons';
import { pokemonList } from '$lib/data/pokemon';

export function load({ params }) {
	const dungeon = dungeonList.find((item) => item.id === params.dungeon);
	dungeon.pokemon = dungeon.pokemon.map((item) => {
		return {
			...item,
			...pokemonList.find((pokemonData) => pokemonData.id === item.id)
		};
	});
	return dungeon;
}
