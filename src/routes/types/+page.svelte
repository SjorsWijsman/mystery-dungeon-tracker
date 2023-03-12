<script>
	import Table from '$lib/components/Table.svelte';
	import {
		faAngleDoubleDown,
		faAngleDown,
		faAngleUp,
		faBolt
	} from '@fortawesome/free-solid-svg-icons';
	import { pageColor } from '$lib/store';

	export let data;

	$pageColor = [];

	const headers = [
		{
			column: 'type',
			title: 'Type',
			type: 'type',
			icon: faBolt
		},
		{
			column: 'superEffective',
			title: 'Super Effective (1.7x)',
			type: 'type',
			icon: faAngleUp
		},
		{
			column: 'notVeryEffective',
			title: 'Not Very Effective (0.7x)',
			type: 'type',
			icon: faAngleDown
		},
		{
			column: 'littleEffect',
			title: 'Little Effect (0.5x)',
			type: 'type',
			icon: faAngleDoubleDown
		}
	];
</script>

<h1>Types</h1>
<h2>Damage Chart</h2>
<Table data={data.typeList} {headers} />
