import { typeList } from '$lib/data/types';

export function match(param) {
	return typeList.map((item) => item.type).includes(param);
}
