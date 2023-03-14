<script>
	import Table from '$lib/components/Table.svelte';
	import { faLocationDot, faStairs } from '@fortawesome/free-solid-svg-icons';

	export let data;

	const headers = [
		{
			column: 'title',
			title: 'Dungeon',
			icon: faLocationDot,
			type: 'link'
		}
		// {
		// 	column: 'floors',
		// 	title: 'Floors',
		// 	icon: faStairs
		// }
	];
</script>

<h1>Dungeons</h1>
<Table data={data.dungeonList} {headers} showIcons={true} type={'dungeons'} />
