<script>
	import Table from '$lib/components/Table.svelte';
	import { recruitedPokemon } from '$lib/store';
	import { faLocationDot, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

	export let data;
	let dungeonList;
	$: dungeonList = data.dungeonList;

	$: dungeonList.forEach((dungeon) => {
		dungeon.pokemonList = [...dungeon.pokemon.map((item) => item.id)];
	});

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
		},
		{
			column: 'pokemonList',
			title: 'Pokémon',
			sortable: true,
			icon: faStar,
			type: 'portraitList',
			portraitType: 'pokedex'
		}
	];
</script>

<h1>Dungeons</h1>
<h2>Dungeon List</h2>
<Table data={dungeonList} {headers} showIcons={true} type={'dungeons'} />
