import { dungeonList } from '$lib/data/dungeons';

export function load({ params }) {
	const dungeon = dungeonList.filter((item) => item.id === params.dungeon)[0];
	return dungeon;
}
