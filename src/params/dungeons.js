import { dungeonList } from '$lib/data/dungeons';

export function match(param) {
	return dungeonList.map((item) => item.id).includes(param);
}
