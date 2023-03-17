<script>
	import Table from '$lib/components/Table.svelte';
	import {
		faAngleDoubleDown,
		faAngleDown,
		faAngleUp,
		faArrowDownLong,
		faArrowRightLong,
		faBolt
	} from '@fortawesome/free-solid-svg-icons';
	import { pageColor } from '$lib/store';
	import Fa from 'svelte-fa';

	export let data;

	const types = [];

	$pageColor = [];

	data.typeList.forEach((type) => {
		types.push(type.type);
	});

	const effectivenessHeaders = [
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

	const matrixHeaders = [
		{
			column: 'type',
			title: 'Type',
			type: 'type',
			icon: faBolt
		}
	];

	types.forEach((type) => {
		matrixHeaders.push({
			column: type,
			title: type,
			vertical: true,
			type: 'effectiveness'
		});
	});

	const matrixChart = [];

	types.forEach((attType, i) => {
		const typeChart = {
			id: i,
			type: attType
		};
		types.forEach((defType) => {
			if (data.typeList[i].superEffective.includes(defType)) typeChart[defType] = 1.7;
			else if (data.typeList[i].notVeryEffective.includes(defType)) typeChart[defType] = 0.7;
			else if (data.typeList[i].littleEffect.includes(defType)) typeChart[defType] = 0.5;
			else typeChart[defType] = 1;
		});
		matrixChart.push(typeChart);
	});
</script>

<h1>Types</h1>
<h2>Damage Chart</h2>
<p>
	<span><Fa icon={faArrowDownLong} />Attacking</span>
	<span><Fa icon={faArrowRightLong} />Defending</span>
</p>
<Table data={matrixChart} headers={matrixHeaders} />

<h2>Effectiveness Chart</h2>
<Table data={data.typeList} headers={effectivenessHeaders} />

<style>
	p {
		display: flex;
		gap: 2rem;
	}
	p span {
		display: flex;
		gap: 0.6rem;
		align-items: center;
	}
</style>
