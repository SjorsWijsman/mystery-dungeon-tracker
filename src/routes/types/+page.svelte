<script>
	import Table from '$lib/components/Table.svelte';
	import { faBolt } from '@fortawesome/free-solid-svg-icons';
	import { pageColor } from '$lib/store';

	export let data;

	$pageColor = [];

	const headers = [
		{
			column: 'type',
			title: 'Type',
			icon: faBolt
		}
	];
</script>

<h1>Types</h1>
<Table data={data.typeList} {headers} />
