<script>
	import Table from '$lib/components/Table.svelte';
	import { faArrowDownLong, faArrowRightLong, faBolt } from '@fortawesome/free-solid-svg-icons';
	import { pageColor } from '$lib/store';
	import Fa from 'svelte-fa';

	export let data;

	const types = [];

	$pageColor = [];

	data.typeList.forEach((type) => {
		types.push(type.type);
	});

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
<h2>Effectiveness Chart</h2>
<p>
	<span><Fa icon={faArrowDownLong} />Attacking</span>
	<span><Fa icon={faArrowRightLong} />Defending</span>
</p>
<Table data={matrixChart} headers={matrixHeaders} />

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
