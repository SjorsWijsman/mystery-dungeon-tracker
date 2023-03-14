<script>
	import Table from '$lib/components/Table.svelte';
	import { faLocationDot, faStairs, faHeart } from '@fortawesome/free-solid-svg-icons';

	export let data;

	const headers = [
		{
			column: 'title',
			title: 'Dungeon',
			icon: faLocationDot,
			type: 'link'
		},
		{
			column: 'completed',
			title: 'Completed',
			sortable: true,
			icon: faHeart,
			type: 'completed'
		}
	];
</script>

<h1>Dungeons</h1>
<h2>Dungeon List</h2>
<Table data={data.dungeonList} {headers} showIcons={true} type={'dungeons'} />
