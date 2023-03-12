<script>
	import Table from '$lib/components/Table.svelte';
	import { faHashtag, faGhost, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';

	export let pokemonList;

	// Pokemon images & link
	$: pokemonList.map((pokemon) => {
		pokemon.icon = `https://www.serebii.net/dungeonsky/headshot/${pokemon.id}.png`;
		return pokemon;
	});

	const headers = [
		{
			column: 'id',
			title: 'ID',
			icon: faHashtag,
			sortable: true
		},
		{
			column: 'name',
			title: 'Pokémon',
			icon: faGhost,
			sortable: true,
			link: true
		},
		{
			column: 'type',
			title: 'Type',
			icon: faBolt
		},
		{
			column: 'recruited',
			title: 'Recruited',
			icon: faHeart
		}
	];
</script>

{#key pokemonList}
	<Table {headers} data={pokemonList} showIcons={true} />
{/key}
